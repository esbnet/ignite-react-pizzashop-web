import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils } from "lucide-react";

export default function DayOrdersAmountCard() {
	return (
		<>
			<Card>
				<CardHeader className="flex-row justify-between space-y-0 pb-2">
					<CardTitle className="font-semibold text-base">
						Pedidos (dia)
					</CardTitle>
					<Utensils className="w-4 h-4 text-muted-foreground" />
				</CardHeader>
				<CardContent className="space-y-1">
					<span className="font-bold text-2xl tracking-tight">16</span>
					<p>
						<span className="text-rose-500 dark:text-rose-400">-5%</span> em
						realação a ontem
					</p>
				</CardContent>
			</Card>
		</>
	);
}
