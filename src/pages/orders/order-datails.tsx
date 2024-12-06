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

export interface OrderDatailsProps {}
export default function OrderDatails(props: OrderDatailsProps) {
	return (
		<div>
			{" "}
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Pedido: 12354625</DialogTitle>
				</DialogHeader>
				<DialogDescription>
					<p>Detalhes do pedido</p>
				</DialogDescription>
				<div className="space-y-6">
					<Table>
						<TableBody>
							<TableRow>
								<TableCell className="text-muted-foreground">Status</TableCell>
								<TableCell className="flex justify-end">
									<div className="flex items-center gap-2">
										<span className="bg-slate-400 rounded-full w-2 h-2" />
										<span className="font-medium text-muted-foreground">
											Pendente
										</span>
									</div>
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">Cliente</TableCell>
								<TableCell className="flex justify-end">
									Edmilson Soares
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">
									Telefone
								</TableCell>
								<TableCell className="flex justify-end">
									+55 71988630845
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">E-mail</TableCell>
								<TableCell className="flex justify-end">
									esbnet@gmail.com
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell className="text-muted-foreground">
									Realizado há
								</TableCell>
								<TableCell className="flex justify-end">2 dias</TableCell>
							</TableRow>
						</TableBody>
					</Table>

					{/* order details */}
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[64px] text-center">Produto</TableHead>
								<TableHead className="w-[64px] text-center">Qtd.</TableHead>
								<TableHead className="w-[64px] text-center">Preço</TableHead>
								<TableHead className="w-[64px] text-center">Subtotal</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="">produto</TableCell>
								<TableCell className="text-right">2</TableCell>
								<TableCell className="text-right">R$ 100,00</TableCell>
								<TableCell className="text-right">R$ 200,00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">produto</TableCell>
								<TableCell className="text-right">2</TableCell>
								<TableCell className="text-right">R$ 100,00</TableCell>
								<TableCell className="text-right">R$ 200,00</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className="">produto</TableCell>
								<TableCell className="text-right">2</TableCell>
								<TableCell className="text-right">R$ 100,00</TableCell>
								<TableCell className="text-right">R$ 200,00</TableCell>
							</TableRow>
						</TableBody>
						<TableFooter>
							<TableRow>
								<TableCell colSpan={3} className="font-medium">
									Total do pedido
								</TableCell>
								<TableCell className="text-right font-medium">
									R$ 600,00
								</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</div>
			</DialogContent>
		</div>
	);
}
