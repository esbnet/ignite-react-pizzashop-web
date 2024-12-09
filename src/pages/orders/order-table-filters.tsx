import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Search, X } from "lucide-react";
import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const orderFiltersSchema = z.object({
	orderId: z.string().optional(),
	customerName: z.string().optional(),
	status: z.string().optional(),
});

type OrderFiltersSchema = z.infer<typeof orderFiltersSchema>;

export function OrderTableFilters() {
	const [searchParams, setSearchParams] = useSearchParams();

	const orderId = searchParams.get("orderId");
	const customerName = searchParams.get("customerName");
	const status = searchParams.get("status");

	const { register, handleSubmit, control, reset } =
		useForm<OrderFiltersSchema>({
			resolver: zodResolver(orderFiltersSchema),
			defaultValues: {
				orderId: orderId ?? "",
				customerName: customerName ?? "",
				status: status ?? "all",
			},
		});

	function handleFilter({ orderId, customerName, status }: OrderFiltersSchema) {
		setSearchParams((state) => {
			if (orderId) {
				state.set("orderId", orderId);
			} else {
				state.delete("orderId");
			}

			if (customerName) {
				state.set("customerName", customerName);
			} else {
				state.delete("customerName");
			}

			if (status) {
				state.set("status", status);
			} else {
				state.delete("status");
			}

			state.set("page", "1");

			return state;
		});
	}

	function handleClearFilters() {
		setSearchParams((state) => {
			state.delete("orderId");
			state.delete("customerName");
			state.delete("status");
			state.set("page", "1");
			return state;
		});

		reset(
			{
				orderId: "",
				customerName: "",
				status: "all",
			},
			{
				keepDirty: false,
			},
		);
	}

	return (
		<form
			onSubmit={handleSubmit(handleFilter)}
			className="flex items-center gap-2"
		>
			<span className="font-semibold text-sm">Filtros:</span>
			<Input
				placeholder="ID do pedido"
				className="w-auto h-8"
				{...register("orderId")}
			/>
			<Input
				placeholder="Nome do cliente"
				className="w-[320px] h-8"
				{...register("customerName")}
			/>

			<Controller
				name="status"
				control={control}
				render={({ field: { name, onChange, value, disabled } }) => {
					return (
						<Select
							defaultValue="all"
							onValueChange={onChange}
							name={name}
							value={value}
							disabled={disabled}
						>
							<SelectTrigger className="w-[180px] h-8">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="all">Todos status</SelectItem>
								<SelectItem value="pending">Pendente</SelectItem>
								<SelectItem value="approved">Aprovado</SelectItem>
								<SelectItem value="delivered">Entregue</SelectItem>
								<SelectItem value="canceled">Cancelado</SelectItem>
							</SelectContent>
						</Select>
					);
				}}
			/>

			<Button className="h-8">
				<Search className="w-4 h-4" />
				Filtrar resultados
			</Button>
			<Button variant="outline" className="h-8" onClick={handleClearFilters}>
				<X className="w-4 h-4" />
				Remover Filtros
			</Button>
		</form>
	);
}
