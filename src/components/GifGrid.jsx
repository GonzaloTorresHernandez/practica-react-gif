import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

export const GifGrid = ({ valor }) => {

    const { imagenes, estaCargando} = useFetchGifs(valor);

    return (
        <>
            <h3>{valor}</h3>
            {
                // llamar solo si se cumple el estaCargando
                estaCargando && (<h4>Cargando...</h4>)
            }
            
            <div className="card-grid">
                {
                    imagenes.map(({ id, titulo, url }) => {
                        return (
                            <GifItem key={id} titulo={titulo} url={url} />
                        );
                    })
                }
            </div>
        </>
    );
};

GifGrid.propTypes = {
    valor: PropTypes.string.isRequired
}