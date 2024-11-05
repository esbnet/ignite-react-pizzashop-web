import { Link, type LinkProps, useLocation } from "react-router-dom";

export interface NavLinkProps extends LinkProps {}
export function NavLink(props: NavLinkProps) {
	const { pathname } = useLocation();

	return (
		<Link
			data-active={props.to === pathname}
			className="flex items-center gap-1.5 font-medium text-muted-foreground text-sm hover:text-foreground data-[active=true]:text-foreground"
			{...props}
		/>
	);
}
