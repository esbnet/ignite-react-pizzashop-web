import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

import colors from "tailwindcss/colors";

const data = [
	{ date: "01/01/2023", uv: 4000, pv: 2400, amt: 2400 },
	{ date: "01/02/2023", uv: 3550, pv: 1398, amt: 2210 },
	{ date: "01/03/2023", uv: 2000, pv: 9800, amt: 2290 },
];
export default function RevenueChart() {
	return (
		<Card className="col-span-6">
			<CardHeader className="flex-row justify-between items-center pb-8">
				<div className="space-y-1">
					<CardTitle className="font-medium text-base">
						Receita no período
					</CardTitle>
					<CardDescription> diário no período</CardDescription>
				</div>
			</CardHeader>
			<CardContent>
				<ResponsiveContainer width="100%" height={300}>
					<LineChart data={data} style={{ fontSize: "12px" }}>
						<CartesianGrid
							vertical={true}
							strokeDasharray="3 3"
							className="stroke-muted-foreground/50"
						/>
						<XAxis dataKey="date" dy={16} />
						<YAxis
							stroke="#888"
							allowDecimals
							tickLine={false}
							tickFormatter={(value) => `R$ ${value}`}
						/>
						<Tooltip />
						<Line type="monotone" dataKey="uv" stroke={colors.emerald[500]} />
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	);
}
