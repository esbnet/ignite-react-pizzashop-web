import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function OrderTableFilters() {
	return (
		<form className="flex items-center gap-2">
			<span className="font-semibold text-sm">Filtros:</span>
			<Input placeholder="ID do pedido" className="w-auto h-8" />
			<Input placeholder="Nome do cliente" className="w-[320px] h-8" />
			<Select defaultValue="all">
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

			<Button className="h-8">
				<Search className="w-4 h-4" />
				Filtrar resultados
			</Button>
		</form>
	);
}
