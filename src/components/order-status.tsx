type OrderStatus =
	| "pending"
	| "canceled"
	| "processing"
	| "delivering"
	| "delivered";

interface OrderStatusProps {
	status: OrderStatus;
}

const orderStatusMap: Record<OrderStatus, string> = {
	pending: "Pendente",
	canceled: "Cancelado",
	processing: "Em preparo",
	delivering: "Em entrega",
	delivered: "Entregue",
};

export function OrderStatus({ status }: OrderStatusProps) {
	return (
		<div className="flex items-center gap-2">
			{status === "pending" && (
				<span className="bg-slate-400 rounded-full w-2 h-2" />
			)}
			{status === "canceled" && (
				<span className="bg-rose-500 rounded-full w-2 h-2" />
			)}
			{status === "delivered" && (
				<span className="bg-emerald-500 rounded-full w-2 h-2" />
			)}
			{["processing", "delivering"].includes(status) && (
				<span className="bg-amber-500 rounded-full w-2 h-2" />
			)}
			<span className="font-medium text-muted-foreground">
				{orderStatusMap[status]}
			</span>
		</div>
	);
}
