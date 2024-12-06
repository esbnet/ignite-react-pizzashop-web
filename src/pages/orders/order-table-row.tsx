import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

import { OrderStatus } from "@/components/order-status";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import OrderDatails from "./order-datails";

interface OrderTableRowProps {
	order: {
		orderId: string;
		createdAt: Date;
		status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
		customerName: string;
		total: number;
	};
}

export default function OrderTableRow({ order }: OrderTableRowProps) {
	return (
		<TableRow>
			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant={"outline"} size={"icon"}>
							<Search className="w-3 h-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>

					<OrderDatails />
				</Dialog>
			</TableCell>
			<TableCell className="font-medium font-mono text-xs">
				{order.orderId}
			</TableCell>
			<TableCell className="text-muted-foreground">
				{formatDistanceToNow(order.createdAt, {
					addSuffix: true,
					locale: ptBR,
				})}
			</TableCell>
			<TableCell>
				<div className="flex items-center gap-2">
					<OrderStatus status={order.status} />
				</div>
			</TableCell>
			<TableCell className="font-medium">{order.customerName}</TableCell>
			<TableCell className="text-right font-medium">
				{order.total.toLocaleString("pt-BR", {
					style: "currency",
					currency: "BRL",
				})}
			</TableCell>

			<TableCell className="flex justify-between items-center gap-2 text-center">
				<Button variant={"outline"}>
					<ArrowRight className="w-4 h-4" />
					{order.status}
				</Button>
				<Button variant={"ghost"}>
					<X className="mr-2 w-3 h-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	);
}
