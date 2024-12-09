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
	onPageChange: (pageIndex: number) => Promise<void> | void;
}

export default function Pagination({
	pageIndex,
	totalCount,
	perPage,
	onPageChange,
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
					<Button
						onClick={() => onPageChange(0)}
						variant="outline"
						className="p-0 w-8 h-8"
						disabled={pageIndex === 0}
					>
						<ChevronsLeft className="w-4 h-4" />
						<span className="sr-only">Primeira página</span>
					</Button>
					<Button
						onClick={() => onPageChange(pageIndex - 1)}
						variant="outline"
						className="p-0 w-8 h-8"
						disabled={pageIndex === 0}
					>
						<ChevronLeft className="w-4 h-4" />
						<span className="sr-only">Próxima página</span>
					</Button>
					<Button
						onClick={() => onPageChange(pageIndex + 1)}
						variant="outline"
						className="p-0 w-8 h-8"
						disabled={pageIndex === pages - 1}
					>
						<ChevronRight className="w-4 h-4" />
						<span className="sr-only">Página anterior</span>
					</Button>
					<Button
						onClick={() => onPageChange(pages - 1)}
						variant="outline"
						className="p-0 w-8 h-8"
						disabled={pageIndex === pages - 1}
					>
						<ChevronsRight className="w-4 h-4" />
						<span className="sr-only">Última página</span>
					</Button>
				</div>
			</div>
		</div>
	);
}
