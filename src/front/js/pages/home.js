import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Llegó el Inicio de Todo</h1>
			<Link to={"/signup"}>
			<button className="btn btn-primary me-3">Registrarse</button>
			</Link>
			<Link to={"/login"}>
			<button className="btn btn-primary ms-3">Iniciar Sesion</button>
			</Link><br></br>
			<Link to={"/private"}>
			<span></span>
			</Link>
		</div>
	);
};  