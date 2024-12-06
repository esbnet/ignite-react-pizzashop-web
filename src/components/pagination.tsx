import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from "lucide-react";

import { Button } from "./ui/button";

export interface PaginationProps {
	pageIndex: number;
	totalCount: number;
	perPage: number;
}

export default function Pagination({
	pageIndex,
	totalCount,
	perPage,
}: PaginationProps) {
	const pages = Math.ceil(totalCount / perPage) || 1;

	return (
		<div className="flex justify-between items-center">
			<span>Total de {totalCount} itens</span>
			<div className="flex items-center gap-6 lg:gap-8">
				<div className="font-medium text-sm">
					Página {pageIndex + 1} de {pages}
				</div>
				<div className="flex items-center gap-2">
					<Button variant="outline" className="p-0 w-8 h-8">
						<ChevronsLeft className="w-4 h-4" />
						<span className="sr-only">Primeira página</span>
					</Button>
					<Button variant="outline" className="p-0 w-8 h-8">
						<ChevronLeft className="w-4 h-4" />
						<span className="sr-only">Próxima página</span>
					</Button>
					<Button variant="outline" className="p-0 w-8 h-8">
						<ChevronRight className="w-4 h-4" />
						<span className="sr-only">Página anterior</span>
					</Button>
					<Button variant="outline" className="p-0 w-8 h-8">
						<ChevronsRight className="w-4 h-4" />
						<span className="sr-only">Última página</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
