import React from "react";
import Banner from "../../componentes/banner";
import Topo from "../../componentes/topo";
import Main from "../../componentes/main";
import Rodape from "../../componentes/rodape";

export default function Home(){
    return(
        <div>
            <Topo />
            <Banner />
            <Main />
            <Rodape />
        </div>
    )
}