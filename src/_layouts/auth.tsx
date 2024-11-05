import { Pizza } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
	return (
		<div className="grid grid-cols-2 min-h-screen antialiased">
			<div className="flex flex-col justify-between border-foreground/5 bg-foreground/10 p-10 border-r h-full text-muted-foreground">
				<div className="flex items-center gap-3 text-foreground text.lg">
					<Pizza className="w-5 h-5" />
					<span className="font-semibold">pizza.shop</span>
				</div>
				<footer className="text-sm">
					Painel do Parceiro &copy; pizza.shop - {new Date().getFullYear()}
				</footer>
			</div>
			<div className="relative flex flex-col justify-center items-center p-10">
				<Outlet />
			</div>
		</div>
	);
}
