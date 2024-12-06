import { useMutation, useQuery } from "@tanstack/react-query";
import {
	Building,
	ChevronDown,
	CreditCard,
	LogOut,
	Settings,
} from "lucide-react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { getManagedRestaurant } from "@/api/get-manager-restaurant";
import { getProfile } from "@/api/get-profile";
import { signOut } from "@/api/sign-out";
import { useNavigate } from "react-router-dom";
import { StoreProfileDialog } from "./store-profile-dialog";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

export function AccountMenu() {
	const navigate = useNavigate();
	const { data: profile, isLoading: isLoadingProfile } = useQuery({
		queryKey: ["profile"],
		queryFn: getProfile,
		staleTime: Number.POSITIVE_INFINITY,
	});

	const { data: managedRestaurant, isLoading: isLoadingManagedRestaurant } =
		useQuery({
			queryKey: ["managed-restaurant"],
			queryFn: getManagedRestaurant,
			staleTime: Number.POSITIVE_INFINITY,
		});

	const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
		mutationFn: signOut,
		onSuccess: () => {
			navigate("/sign-in", { replace: true });
		},
	});

	return (
		<Dialog>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						className="flex items-center gap-2 select-none"
						variant={"ghost"}
					>
						<span className="sr-only">
							{isLoadingManagedRestaurant ? (
								<Skeleton className="w-40 h-4" />
							) : (
								managedRestaurant?.name
							)}
						</span>
						<div className="flex items-center">
							<img
								className="rounded-full w-8 h-8"
								src="https://github.com/esbnet.png"
								alt=""
							/>
							<span className="ml-3">
								{isLoadingManagedRestaurant ? (
									<Skeleton className="w-40 h-4" />
								) : (
									managedRestaurant?.name
								)}
							</span>
							<ChevronDown className="ml-2 w-4 h-4" />
						</div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="shadow w-56" align="end">
					<DropdownMenuLabel className="flex flex-col">
						<span className="font-semibold">{profile?.name}</span>
						<span className="text-muted-foreground">{profile?.role}</span>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DialogTrigger asChild>
						<DropdownMenuItem>
							<Building className="mr-2 w-4 h-4" />
							Perfil da Loja
						</DropdownMenuItem>
					</DialogTrigger>
					<DropdownMenuItem>
						<CreditCard className="mr-2 w-4 h-4" />
						Pagamento
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 w-4 h-4" />
						Configurações
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem
						className="text-rose-500 dark:text-rose-400"
						disabled={isSigningOut}
						asChild
					>
						<Button
							variant="ghost"
							onClick={() => signOutFn()}
							className="w-full"
						>
							<LogOut className="mr-2 w-4 h-4" />
							Sair
						</Button>
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
			<StoreProfileDialog />
		</Dialog>
	);
}
