import "./global.css";

import { Helmet, HelmetProvider } from "react-helmet-async";

import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Toaster } from "./components/ui/sonner";
import { queryClient } from "./lib/react-query";
import { router } from "./router";

export function App() {
	return (
		<HelmetProvider>
			<ThemeProvider storageKey="pizza-ui-theme" defaultTheme="system">
				<Toaster richColors />
				<Helmet titleTemplate="%s | pizza.shop" />
				<QueryClientProvider client={queryClient}>
					{<RouterProvider router={router} />}
				</QueryClientProvider>
			</ThemeProvider>
		</HelmetProvider>
	);
}
