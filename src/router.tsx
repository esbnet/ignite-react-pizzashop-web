import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./_layouts/app";
import { AuthLayout } from "./_layouts/auth";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { SignUp } from "./pages/auth/sign-up";
import Orders from "./pages/orders/orders";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{ path: "/", element: <Dashboard /> },
			{ path: "/orders", element: <Orders /> },
		],
		errorElement: <div />,
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
