import { Helmet } from "react-helmet-async";
import DayOrdersAmountCard from "./day-orders-amount-card copy";
import MounthCancelOrdersAmountCard from "./mounth-cancel-orders-amount-card";
import MounthOrdersAmountCard from "./mounth-orders-amount-card";
import MounthRevenueCard from "./mounth-revenue-card";
import PopularProductsChart from "./popular-products-chart copy";
import RevenueChart from "./revenue-chart";

export function Dashboard() {
	return (
		<>
			<Helmet title="Dashboard" />
			<div className="flex flex-col gap-4">
				<h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>
				<div className="gap-4 grid grid-cols-4">
					<MounthRevenueCard />
					<MounthOrdersAmountCard />
					<DayOrdersAmountCard />
					<MounthCancelOrdersAmountCard />
				</div>
				<div className="gap-4 grid grid-cols-9">
					<RevenueChart />
					<PopularProductsChart />
				</div>
			</div>
		</>
	);
}
