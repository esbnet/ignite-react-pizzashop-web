import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Helmet } from "react-helmet-async";
import { v4 as uuid } from "uuid";

export default function Orders() {
	return (
		<>
			<Helmet title="Pedidos" />
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
			</div>
			<div className="space-y-2.5">
				<form className="flex items-center gap-2">
					<span className="font-semibold text-sm">Filtros:</span>
					<Input placeholder="Nome do cliente" />
				</form>
				<div className="rounded-md boder">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[64px]">a</TableHead>
								<TableHead className="w-[140px]">Código</TableHead>
								<TableHead className="w-[180px]">Realizado há</TableHead>
								<TableHead className="w-[140px]">Status</TableHead>
								<TableHead>Cliente</TableHead>
								<TableHead className="w-[140px]">Total do pedido</TableHead>
								<TableHead className="w-[140px] text-center">Ações</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{Array.from({ length: 10 }).map((_, i) => {
								const key = `${i}${uuid()}`;

								return (
									<TableRow key={key}>
										<TableCell>
											<Button variant={"outline"} size={"icon"}>
												<Search className="w-3 h-3" />
												<span className="sr-only">Detalhes do pedido</span>
											</Button>
										</TableCell>
										<TableCell className="font-medium font-mono text-xs">
											1a23f13ds1f3a
										</TableCell>
										<TableCell className="text-muted-foreground">
											39 dias
										</TableCell>
										<TableCell>
											<div className="flex items-center gap-2">
												<span className="bg-slate-400 rounded-full w-2 h-2" />
												<span className="font-medium text-muted-foreground">
													Pendente
												</span>
											</div>
										</TableCell>
										<TableCell className="font-medium">
											Amanda Costa de Souza
										</TableCell>
										<TableCell className="font-medium">R$ 2.530,00</TableCell>

										<TableCell className="flex justify-between items-center gap-2 text-center">
											<Button variant={"outline"}>
												<ArrowRight className="w-4 h-4" />
												Aprovar
											</Button>
											<Button variant={"ghost"}>
												<X className="mr-2 w-3 h-3" />
												Cancelar
											</Button>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		</>
	);
}
