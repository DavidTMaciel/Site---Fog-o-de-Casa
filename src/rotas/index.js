import {BrowserRouter, Routes, Route} from 'react-router-dom';
import React from "react";
import Home from "../paginas/Home/Home";
import Cardapio from '../paginas/cardapio';
import Login from '../paginas/Login';




export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path='cardapio' element={<Cardapio />}></Route>
                <Route path='login' element={<Login/>}></Route>
            </Routes>
        </BrowserRouter>

    )
}