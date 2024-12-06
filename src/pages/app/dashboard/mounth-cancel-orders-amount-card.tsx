import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { DollarSign } from "lucide-react";

export default function MounthCancelOrdersAmountCard() {
	return (
		<>
			<Card>
				<CardHeader className="flex-row justify-between space-y-0 pb-2">
					<CardTitle className="font-semibold text-base">
						Cancelamentos (mês)
					</CardTitle>
					<DollarSign className="w-4 h-4 text-muted-foreground" />
				</CardHeader>
				<CardContent className="space-y-1">
					<span className="font-bold text-2xl tracking-tight">15</span>
					<p>
						<span className="text-emerald-500 dark:text-emerald-400">-6%</span>{" "}
						em realação ao mês passado
					</p>
				</CardContent>
			</Card>
		</>
	);
}
