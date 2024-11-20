import { useEffect, useState } from "react";
import { peticion } from "../helpers/getGifs";

export const useFetchGifs = ( valor ) => {
    // un hook es una funcion que retorna algo

    const [imagenes, setImagenes] = useState([]);
    const [cargando, setCargando] = useState(true);


    const getImagenes = async () => {
        const nuevaImagen = await peticion(valor);
        setImagenes(nuevaImagen, ...imagenes);
        setCargando(false);
    };

    /* 
        hook de react para disparar efectos secundario
        proceso a ocurrir cuando algo pase

        useEffect( callback, dependencias)

        con esto evitamos que se vuelva a recargar constantemente al rearmar el componente y solo se ejecute los nuevos elementos
    */
    useEffect(() => {
        // la funcion de useEffect debe ser sincrona pero si puede llamar a funciones ASINCRONAS
        getImagenes();
    }, []);

    return {
        imagenes: imagenes,
        estaCargando: cargando,
    }
}