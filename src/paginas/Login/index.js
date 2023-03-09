import React from "react";
import Rodape from "../../componentes/rodape";
import Topo from "../../componentes/topo";
import './style.css'

export default function Login(){
    return(
        <div>
            <Topo />
            <div className="banner-cardapio">
                <p>Minha Conta</p>
            </div>
            <div className="login-container">
                <div className="box-login-register">
                    <h2>Login</h2>
                    <p>Usuario ou endereço de email</p>
                    <input type={"email"} className="dados" placeholder="Digite seu e-mail"></input>
                    <p>Senha</p>
                    <input type={"password"} className="dados"></input>
                    <button className="bottom-login">Login</button>                    
                    <p>Esqueceu a senha?</p>
                </div>
                <div className="box-login-register">
                    <h2>Register</h2>
                    <p>Email</p>
                    <input type={"email"} className="dados"></input>
                    <p>Será enviado um Link para seu email, com confirmação</p>
                    <button className="bottom-login">Register</button>
                </div>
            </div>
            <Rodape />
        </div>
    )
}