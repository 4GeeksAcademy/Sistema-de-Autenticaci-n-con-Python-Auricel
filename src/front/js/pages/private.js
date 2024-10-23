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
        <div className="container-fluid d-flex justify-content-center align-items-center flex-column vh-100"> {/* Ajuste para centrar en la página */}
            <div className="mb-3 text-center">
                <h1 className="mb-4 titulo" >Bienvenidos a la Página de Solos para Registrados</h1>

                {/* GIF, con clase img-fluid para que sea responsive */}
                <img src="https://i0.wp.com/bestgrafix.com/wp-content/uploads/2024/09/Halloween-GIF-1-1.gif?resize=640%2C480&ssl=1" 
                     alt="Bienvenidos" 
                     className="img-fluid mb-4" 
                     style={{ maxWidth: "70%", height: "auto" }}
                />
            </div>

            <div className="mb-3">
                <Link to="/">
                <button className="boton btn me-3">Cerrar Sesión</button>
                </Link>
            </div>
        </div>
    );
};

export default Private;
