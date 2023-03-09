import React from "react";
import './style.css';

export default function Banner() {

    return (
        <section className="banner-principal">
            <div className="banner" id="img">
                <h1>PROMOÇÃO <span>PRATO PRINCIPAL </span> <br></br>PELA METADE DO PREÇO</h1>
                <img src="assets/frango.png" alt="frango grelhado" className="frango-grelhado" />
            </div>
            <div className="redes-sociais">
                <img src="assets/facebook.png" alt='facebook' />
                <img src="assets/instagram.png" alt='instagram' />
                <img src="assets/linkedin.png" alt='linkedin' />
            </div>
        </section>
    )
}

