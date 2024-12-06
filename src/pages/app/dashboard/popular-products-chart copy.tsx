import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { BarChart } from "lucide-react";
import colors from "tailwindcss/colors";

const data = [
	{ name: "Quatro queijos", amt: 19 },
	{ name: "Calabresa", amt: 30 },
	{ name: "Napolitana", amt: 27 },
];

const COLORS = [
	colors.emerald[500],
	colors.amber[500],
	colors.violet[500],
	colors.emerald[500],
	colors.rose[500],
];

export default function PopularProductsChart() {
	return (
		<Card className="col-span-3">
			<CardHeader className="pb-8">
				<div className="flex justify-between items-center">
					<CardTitle className="font-medium text-base">
						Produtos populares
					</CardTitle>
					<BarChart className="w-4 h-4 text-muted-foreground" />
				</div>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<PieChart style={{ fontSize: "12px" }}>
						<Pie
							data={data}
							dataKey="amt"
							nameKey="name"
							cx="50%"
							cy="50%"
							outerRadius={100}
							innerRadius={54}
							strokeWidth={8}
							labelLine={false}
							label={({
								cx,
								cy,
								midAngle,
								innerRadius,
								outerRadius,
								value,
								index,
							}) => {
								const RADIAN = Math.PI / 180;
								const radius = 12 + innerRadius + (outerRadius - innerRadius);
								const x = cx + radius * Math.cos(-midAngle * RADIAN);
								const y = cy + radius * Math.sin(-midAngle * RADIAN);

								return (
									<text
										x={x}
										y={y}
										className="text-xs fill-muted-foreground"
										textAnchor={x > cx ? "start" : "end"}
										dominantBaseline="central"
									>
										{data[index].name.length > 12
											? data[index].name.substring(0, 12).concat("...")
											: data[index].name}{" "}
										({value})
									</text>
								);
							}}
						>
							{data.map((_, index) => (
								<Cell
									key={`cell-${
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										index
									}`}
									fill={COLORS[index]}
									className={"stroke-background hover:opacity-80"}
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
