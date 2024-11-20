import React, { useState } from "react";
// importacion por barril
import { AddElemento, GifGrid } from "./components";

// Inportacion normal
// import { AddElemento } from "./components/Addemento";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [valores, setValores] = useState(['Dragon ball']);
    
    const onAddValor = ( nuevoValor ) => {
        if ( valores.includes(nuevoValor)) return;    // si hay algun elemento igual al nuevo valor 
        setValores([nuevoValor, ...valores]);   // al ser un objeto debemos CLONAR el mismo
    }
    
    return (
        <>
            <h1>Gif Expert App</h1>

            <AddElemento onNewValor = { (valor) => { onAddValor(valor) }}/>

            {valores.map( (valor) => {
                return (
                    <GifGrid valor={ valor } key={ valor }/>
                );
            })}
        </>
    );
}