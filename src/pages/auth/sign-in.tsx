import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
	email: z.string().email(),
});

type FormData = z.infer<typeof signInForm>;

export function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormData>();

	async function handleSignIn(data: FormData) {
		try {
			console.log(data);
			await new Promise((resolve) => setTimeout(resolve, 2000));
			toast.success("Enviamos um link de autenticação para o seu e-mail!", {
				action: {
					label: "Reenviar",
					onClick: () => {
						handleSignIn(data);
					},
				},
			});
		} catch {
			toast.error("Credenciais inválidas!");
		}
	}

	return (
		<>
			<Helmet title="Login" />
			<div className="p-8">
				<Button
					className="top-8 right-8 absolute"
					variant={"secondary"}
					asChild
				>
					<Link to="/sign-up">Novo parceiro</Link>
				</Button>
				<div className="flex flex-col justify-center gap-6 w-[350px]">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="font-semibold text-2xl tracking-tight">
							Acessar painel
						</h1>
						<p className="text-muted-foreground text-sm">
							Acompanhe suas vendas pelo painel do parceiro
						</p>
					</div>
					<form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="email">Seu e-mail</Label>
							<Input
								id="email"
								type="email"
								className="input"
								{...register("email")}
							/>
						</div>
						<Button
							disabled={isSubmitting}
							type="submit"
							className="mt-4 w-full btn btn-primary"
						>
							Acessar painel
						</Button>
					</form>
				</div>
			</div>
		</>
	);
}
