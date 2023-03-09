import React from "react";
import './style.css'

export default function Props(props) {
    return (
        <div className="card-principal-cardapio">
            <button className="card-cardapio" >
                <div className="item-cardapio">
                    <h5>{props.item}</h5>
                    <p>{props.description}</p>
                    <span>R$:{props.valor}</span>
                </div>
                <img src={props.imagem} alt='imagem-cardapio' id="card-cardapio" />
            </button>
        </div>
    )
}
