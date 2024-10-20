import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login= () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {actions, store}= useContext(Context)
    const navigate = useNavigate();

 
    return (
        <div className="d-flex justify-content-center mt-5">
            <h1>Login</h1>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email" autoComplete="off"></input>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password" autoComplete="off"></input>
            
            <button 
                className="btn btn-primary me-3" 
                onClick={async () => {
                    try {
                        // Realiza la llamada a la acción de login
                        const response = await actions.login(email, password); 
                        
                        // Si la autenticación es exitosa
                        console.log("Inicio de sesión exitoso");
                        
                        // Limpiar los campos de entrada
                        setEmail("");
                        setPassword("");
                        
                        // Redirigir al usuario a la ruta privada
                        navigate("/private"); 
                    } catch (error) {
                        // Manejo de errores
                        alert('Error en el login: ' + error.message);
                    }
                }}
            >
                Enviar
            </button>

        </div>
    ) 
}

export default Login