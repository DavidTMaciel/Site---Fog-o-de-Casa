import Topo from "../../componentes/topo";
import Rodape from "../../componentes/rodape";
import Props from "../../componentes/props";
import './style.css';

export default function Cardapio() {

 

    
    return (
        <div>
            <Topo />
            <div className="banner-cardapio">
                <p>CARDAPIO</p>
            </div>
            <div className="cardapio">
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Calabreza"
                    description="Calabreza, queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="50,00"
                />
                <Props
                    item="Pizza Grande Mussarela"
                    description="Queijo mussarela, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="65,00"
                />
                <Props
                    item="Pizza Grande 4 Queijos"
                    description="Queijo mussarela, queijo qualy, queijo ricota, queijo do reino oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="65,00"
                />
                <Props
                    item="Pizza Grande Portuguesa"
                    description="Queijo mussarela, tomate, molho, oregano & azeitona"
                    imagem="assets/pizza.png"
                    valor="65,00"
                />
                <Props
                    item="Xburger"
                    description="Hamburger, carne, ovo, queijo, salada & maionese caseira"
                    imagem="assets/hamburgue.png"
                    valor="22,00"
                />
                <Props
                    item="Waffles belgas com morangos"
                    description="Coberto com frango, cebola, pimentão, azeitona preta e pimenta verde"
                    imagem="assets/waffles.png"
                    valor="25,00"
                />
                <Props
                    item="Espeto de frango"
                    description="Coberto com frango, cebola, pimentão, azeitona preta e pimenta verde"
                    imagem="assets/espeto.png"
                    valor="12,00"
                />
                <Props
                    item="Biriyani de carneiro ou cordeiro"
                    description="Coberto com frango, cebola, pimentão, azeitona preta e pimenta verde"
                    imagem="assets/biriyani.png"
                    valor="55,00"
                />
                <Props
                    item="Coca Cola"
                    description="Bebida sem alcool, coca cola 500ml"
                    imagem="assets/coca.png"
                    valor="5,00"
                />
                <Props
                    item="Chocolate ice cream"
                    description="Chocolate gelado"
                    imagem="assets/chocolate.png"
                    valor="20,00"
                />

            </div>

            <Rodape />
        </div>
    )
}