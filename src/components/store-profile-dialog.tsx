import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "./ui/dialog";

import {
	type GetManagerRestaurantResponse,
	getManagedRestaurant,
} from "@/api/get-manager-restaurant";
import { updateProfile } from "@/api/update-profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

const storeProfileSchema = z.object({
	name: z.string().min(1),
	description: z.string().nullable(),
});

type StoreProfileSchema = z.infer<typeof storeProfileSchema>;

export function StoreProfileDialog() {
	const queryClient = useQueryClient();

	const { data: managedRestaurant } = useQuery({
		queryKey: ["managed-restaurant"],
		queryFn: getManagedRestaurant,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const {
		handleSubmit,
		register,
		formState: { isSubmitting },
	} = useForm<StoreProfileSchema>({
		resolver: zodResolver(storeProfileSchema),
		values: {
			name: managedRestaurant?.name ?? "",
			description: managedRestaurant?.description ?? "",
		},
	});

	function updateManagedRestaurantCache({
		name,
		description,
	}: StoreProfileSchema) {
		const cached = queryClient.getQueryData<GetManagerRestaurantResponse>([
			"managed-restaurant",
		]);
		if (cached) {
			queryClient.setQueryData<GetManagerRestaurantResponse>(
				["managed-restaurant"],
				{
					...cached,
					name,
					description,
				},
			);
		}
		return { cached };
	}

	const { mutateAsync: updateProfileFn } = useMutation({
		mutationFn: updateProfile,
		onMutate: ({ name, description }) => {
			const { cached } = updateManagedRestaurantCache({ name, description });
			return { previousProfile: cached };
		},
		onError: (_, __, context) => {
			if (context?.previousProfile) {
				updateManagedRestaurantCache(context.previousProfile);
			}
		},
	});

	async function handleUpdateProfile(data: StoreProfileSchema) {
		try {
			await updateProfileFn({
				name: data.name,
				description: data.description,
			});

			toast.success("Perfil atualizado com sucesso!");
		} catch (error) {
			toast.error("Falha ao atualizar perfil, tente novamente!");
		}
	}

	return (
		<DialogContent className="">
			<DialogHeader>
				<DialogTitle>Configurações da loja</DialogTitle>
				<DialogDescription>
					Atualize as informações do seu estabelecimento visíveis a seu público
				</DialogDescription>
			</DialogHeader>
			<form onSubmit={handleSubmit(handleUpdateProfile)}>
				<div className="space-y-4 py-4">
					<div className="items-center gap-4 grid grid-cols-4">
						<Label className="text-right" htmlFor="name">
							Nome
						</Label>
						<Input id="name" className="col-span-3" {...register("name")} />
					</div>
					<div className="items-center gap-4 grid grid-cols-4">
						<Label className="text-right" htmlFor="description">
							Descrição
						</Label>
						<Textarea
							id="description"
							className="col-span-3"
							{...register("description")}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"ghost"} type="button" onClick={() => {}}>
							Cancelar
						</Button>
					</DialogClose>
					<DialogClose asChild>
						<Button variant={"success"} type="submit" disabled={isSubmitting}>
							Salvar
						</Button>
					</DialogClose>
				</DialogFooter>
			</form>
		</DialogContent>
	);
}
