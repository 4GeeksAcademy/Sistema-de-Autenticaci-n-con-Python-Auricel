import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {actions, store}= useContext(Context)
    const navigate = useNavigate();

    return (
        <div className="d-flex justify-content-center mt-5">
            <h1 className="titulo ms-3">Registro</h1>
            <input type="text" onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="email" autoComplete="new-email" ></input>
            <input type="password" onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="password" autoComplete="new-password" ></input>
            
            <button className="btn btn-primary me-3" onClick={async() => {
                try {
                    await actions.signup(email, password);
                    console.log("Has pasado correctamente el registro");
                    setEmail(""); // Limpiar el campo de email
                    setPassword(""); // Limpiar el campo de password
                    navigate("/login"); 
                } catch (error) {
                    alert(error);
                }
            }}>Enviar</button>

        </div>
    )
}

export default Signup