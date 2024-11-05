import { HomeIcon, Pizza, UtensilsCrossed } from "lucide-react";

import { AccountMenu } from "./account-menu";
import { NavLink } from "./nav-link";
import { ThemeToggle } from "./theme/theme-toggle";
import { Separator } from "./ui/separator";

export default function Header() {
	return (
		<div className="border-b">
			<div className="flex items-center gap-6 px-6 h-16">
				<Pizza className="w-6 h-6" />
				<Separator orientation="vertical" className="h-6" />
				<nav className="flex items-center space-x-4 lg:space-x-6">
					<NavLink to="/">
						<HomeIcon className="w-4 h-4" />
						Início
					</NavLink>
					<NavLink to="/orders">
						<UtensilsCrossed className="w-4 h-4" />
						Pedido
					</NavLink>
					<NavLink to="/orders">
						<UtensilsCrossed className="w-4 h-4" />
						Pedido
					</NavLink>
				</nav>
				<div className="flex items-center gap-2 space-x-4 lg:space-x-6 ml-auto">
					<ThemeToggle />
					<AccountMenu />
				</div>
			</div>
		</div>
	);
}
