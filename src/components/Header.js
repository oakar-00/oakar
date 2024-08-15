import { Link } from "react-router-dom";
import Menu from "./Menu";

function Header() {
	return (
		<div>
			<br />
			<Link to={"/"}>
				<h1 className="p-0 tracking-widest font-semibold text-center text-5xl duration-300 hover:tracking-[.7em]">
					OAKAR
				</h1>
			</Link>
			<br />
			<Menu />
		</div>
	);
}

export default Header;
