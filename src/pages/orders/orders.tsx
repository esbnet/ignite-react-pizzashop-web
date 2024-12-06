import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { getOrders } from "@/api/get-orders";
import Pagination from "@/components/pagination";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import OrderTableFilters from "./order-table-filters";
import OrderTableRow from "./order-table-row";

export default function Orders() {
	const { data: result } = useQuery({
		queryKey: ["orders"],
		queryFn: getOrders,
	});

	return (
		<>
			<Helmet title="Pedidos" />
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
				<div className="space-y-2.5">
					<OrderTableFilters />
					<div className="border rounded-md">
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
								{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
								{result &&
									result.orders.map((order) => {
										return <OrderTableRow key={order.orderId} order={order} />;
									})}
							</TableBody>
						</Table>
					</div>
					<Pagination pageIndex={0} totalCount={0} perPage={0} />
				</div>
			</div>
		</>
	);
}
