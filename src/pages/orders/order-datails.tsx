import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { getOrderDetails } from "@/api/get-order-tetails";
import { useQuery } from "@tanstack/react-query";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export interface OrderDatailsProps {
	orderId: string;
	open: boolean;
}
export default function OrderDatails({ orderId, open }: OrderDatailsProps) {
	const { data: order } = useQuery({
		queryKey: ["order", orderId],
		queryFn: () => getOrderDetails({ orderId }),
		enabled: open,
	});

	return (
		<div>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Pedido: {orderId}</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					<p>Detalhes do pedido</p>
				</DialogDescription>
				{order && (
					<div className="space-y-6">
						<Table>
							<TableBody>
								<TableRow>
									<TableCell className="text-muted-foreground">
										Status
									</TableCell>
									<TableCell className="flex justify-start">
										<div className="flex items-center gap-2">
											<span className="bg-slate-400 rounded-full w-2 h-2" />
											<span className="font-medium text-muted-foreground">
												{order?.status}
											</span>
										</div>
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="text-muted-foreground">
										Cliente
									</TableCell>
									<TableCell className="flex justify-start">
										{order.customer.name}
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="text-muted-foreground">
										Telefone
									</TableCell>
									<TableCell className="flex justify-start">
										{order?.customer.phone || "Não informado"}
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="text-muted-foreground">
										E-mail
									</TableCell>
									<TableCell className="flex justify-start">
										{order?.customer.email}
									</TableCell>
								</TableRow>

								<TableRow>
									<TableCell className="text-muted-foreground">
										Realizado há
									</TableCell>
									<TableCell className="flex justify-start">
										{formatDistanceToNow(order.createdAt, {
											addSuffix: true,
											locale: ptBR,
										})}
									</TableCell>
								</TableRow>
							</TableBody>
						</Table>

						{/* order details */}
						<Table>
							<TableHeader>
								<TableRow>
									<TableHead className="w-[64px] text-center">
										Produto
									</TableHead>
									<TableHead className="w-[64px] text-center">Qtd.</TableHead>
									<TableHead className="w-[64px] text-center">Preço</TableHead>
									<TableHead className="w-[64px] text-center">
										Subtotal
									</TableHead>
								</TableRow>
							</TableHeader>
							<TableBody>
								{order.orderItems.map((item) => {
									return (
										<TableRow key={item.product.name}>
											<TableCell className="">{item.product.name}</TableCell>
											<TableCell className="text-right">
												{item.quantity}
											</TableCell>
											<TableCell className="text-right">
												{(item.priceInCents / 100).toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</TableCell>
											<TableCell className="text-right">
												{(
													(item.priceInCents / 100) *
													item.quantity
												).toLocaleString("pt-BR", {
													style: "currency",
													currency: "BRL",
												})}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
							<TableFooter>
								<TableRow>
									<TableCell colSpan={3} className="font-medium">
										Total do pedido
									</TableCell>
									<TableCell className="text-right font-medium">
										{(order.totalInCents / 100).toLocaleString("pt-BR", {
											style: "currency",
											currency: "BRL",
										})}
									</TableCell>
								</TableRow>
							</TableFooter>
						</Table>
					</div>
				)}
			</DialogContent>
		</div>
	);
}
