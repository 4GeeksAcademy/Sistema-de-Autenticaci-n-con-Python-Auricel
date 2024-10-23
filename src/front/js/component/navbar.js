import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light">
			<div className="container">
				<Link to="/">
				<button className="boton btn me-3">Pagina de Inicio</button>
				</Link>
				
			</div>
		</nav>
	);
};
