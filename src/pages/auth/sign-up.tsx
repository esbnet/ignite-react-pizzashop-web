import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
	restaurantName: z.string().min(1),
	managerName: z.string().min(1),
	phone: z.string().min(1),
	email: z.string().email(),
});

type FormData = z.infer<typeof signUpForm>;

export function SignUp() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormData>();
	const navigate = useNavigate();

	async function handleSignUp(data: FormData) {
		console.log(data);
		try {
			toast.success("Estabelecimento cadastrado com sucesso!");
			await new Promise((resolve) => setTimeout(resolve, 2000));
			navigate("/sign-in");
		} catch {
			toast.error("Erro ao cadastrar restaurante.");
		}
	}

	return (
		<>
			<Helmet title="Cadastro" />
			<div className="p-8">
				<Button
					className="top-8 right-8 absolute"
					variant={"secondary"}
					asChild
				>
					<Link to="/sign-in">Fazer login</Link>
				</Button>

				<div className="flex flex-col justify-center gap-6 w-[350px]">
					<div className="flex flex-col gap-2 text-center">
						<h1 className="font-semibold text-2xl tracking-tight">
							Criar conta grátis
						</h1>
						<p className="text-muted-foreground text-sm">
							Seja um parceiro e comece a vender na{" "}
							<span className="font-semibold">pizza.shop</span>
						</p>
					</div>
					<form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
						<div className="space-y-2">
							<Label htmlFor="restaurantName">Nome do estabelecimento</Label>
							<Input
								id="restaurantName"
								type="text"
								className="input"
								{...register("restaurantName")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="managerName">Seu nome</Label>
							<Input
								id="managerName"
								type="text"
								className="input"
								{...register("managerName")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="email">Seu e-mail</Label>
							<Input
								id="email"
								type="email"
								className="input"
								{...register("email")}
							/>
						</div>
						<div className="space-y-2">
							<Label htmlFor="phone">Seu Telefone</Label>
							<Input
								id="phone"
								type="text"
								className="input"
								{...register("phone")}
							/>
						</div>
						<Button
							disabled={isSubmitting}
							type="submit"
							className="mt-4 w-full btn btn-primary"
						>
							Finalizar cadastro
						</Button>
						<p className="px-6 text-center text-muted-foreground text-relaxed text-sm">
							Ao continuar, você concorda com os{" "}
							<a className="underline underline-offset-4" href="/">
								Termos de Uso
							</a>{" "}
							e com a nossa{" "}
							<a className="underline underline-offset-4" href="/">
								Politica de Privacidade
							</a>
						</p>
					</form>
				</div>
			</div>
		</>
	);
}
