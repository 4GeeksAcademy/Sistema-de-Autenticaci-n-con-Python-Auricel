import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const Private = () => {

    const { actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const isAuthenticated = await actions.autentificar();
            if (!isAuthenticated) {
                navigate("/"); // Redirigir si el token es inválido o no existe
            }
        };

        checkAuth();
    }, [actions, navigate]);

    return (
        <div>
            <h1>Bienvenidos a la Pagina de Solos para Registrados</h1>
            
            {/* Añadir el GIF externo aquí */}
            <img src="https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif" alt="Bienvenidos" />

            <div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Cerrar Sesion</button>
					</Link>
				</div>

        </div>
    );
};

export default Private;
