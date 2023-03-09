import React from "react";
import { Link } from "react-router-dom";
import './style.css';


export default function Topo() {



    return (
        <header>
            <div className="aviso ">
                <span className="aviso-texto">🕗Aberto das 11:00H as 00:00H</span>
                <span className="aviso-texto">📞(81)9.9999-9999</span>
            </div>
            <div className="topo limitar-secao">
                <img src="assets/logo.png" alt="logo" className="logo" />
                <nav id="estilo">
                    <Link to="/">Home</Link> 
                    <a href="#sobre">Sobre</a>
                    <Link to="cardapio">Cardapio</Link>
                </nav>
                <div className="topo-delivery">
                    <div>
                        <p className="delivery">Devilery</p>
                        <p className="numero">(81)9.9999-9999</p>
                    </div>
                    <img src="assets/entregador.png" alt="entregador" className="entregador" />
                    <button className="login"><Link to="login" className="link">Login</Link></button>
                </div>
            </div>
        </header>
    )
}

