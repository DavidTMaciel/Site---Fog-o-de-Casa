import React from "react";
import './style.css';

export default function Main() {
    return (
        <div className="main">
            <h2>Os Mais Pedidos</h2>
            <div className="carrosel-menor">
                <img src="assets/img1.png" alt="Bebida"/>
                <img src="assets/img2.png" alt="Prato feito"/>
                <img src="assets/img3.png" alt="Hamburguer"/>
                <img src="assets/img4.png" alt="Almoco"/>
                <img src="assets/img5.png" alt="Espetos"/>
            </div>
            <section className="secao-principal limitar-secao">
                <img src="assets/chefe.png" alt="chefe" className="img-chefe" />
                <div className="detalhes">
                    <h3>Grãos artesanais, proteínas e ingredientes sazonais da mais alta qualidade</h3>
                    <p>Ingrediente de primeira qualidade e pratos saborosos você só encontra aqui, tudo feito pelos melhores profissionais, e com temperos incriveis.</p>
                    <div className="lista">
                        <ul>
                            <li>Preços em conta</li>
                            <li>Promoção todos os dias</li>
                            <li>Nota 5⭐em aplicativos de Delivery</li>
                        </ul>
                        <img src="assets/prato1.png" alt="Foto do prato" className="prato1" />
                    </div>
                </div>
            </section>
            <div className="secao-ofertas">
                <h3>Grandes ofertas</h3>
                <p>Toda semana trazemos novas ofertas para você aproveitar</p>
                <div>
                    <img src="assets/oferta1.png" alt="oferta1" />
                    <img src="assets/oferta2.png" alt="oferta2" />
                    <img src="assets/oferta3.png" alt="oferta3" />
                </div>
            </div>
            <div className="restaurante limitar-secao" id="sobre">
                <h3>NOSSO RESTAURANTE</h3>
                <div className="secao-restaurante">
                    <div className="imagem-restaurante">
                        <div>
                            <img src="assets/restaurante1.png" alt="imagem do restaurante"></img>
                            <img src="assets/restaurante2.png" alt="imagem do restaurante"></img>
                        </div>
                        <img src="assets/restaurante3.png" alt="imagem do restaurante"></img>
                    </div>
                    <div className="informacoes">
                        <h4>Para todas as ocasiões especiais</h4>
                        <p>Com mais de 10 anos no mercado, já foram realizados diversos eventos no local, de confraternização de empresas a casamento, nosso ambiente aconchegante e belo, tem tudo o que você precisa</p>
                        <div class="card">
                            <h5>Cardapio de sucesso</h5>
                            <img src="assets/cooking1.png" alt="selo" />
                            <h5>Chefes Renomados</h5>
                            <img src="assets/cooking.png" alt="selo de chefes"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

