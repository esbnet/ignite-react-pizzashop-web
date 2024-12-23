import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { NotFound } from "./pages/404";
import { Dashboard } from "./pages/app/dashboard/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import Orders from "./pages/orders/orders";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <NotFound />,
		children: [
			{ path: "/", element: <Dashboard /> },
			{ path: "/orders", element: <Orders /> },
		],
	},
	{
		path: "/",
		element: <AuthLayout />,
		children: [
			{ path: "/sign-in", element: <SignIn /> },
			{ path: "/sign-up", element: <SignUp /> },
		],
		errorElement: <div />,
	},
]);
