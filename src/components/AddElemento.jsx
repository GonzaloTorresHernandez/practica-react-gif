import React, { useState } from "react";

export const AddElemento = ({ onNewValor }) => {

    const [valorInput, setValorInput] = useState('');

    const onInputChange = (event) => {
        setValorInput(event.target.value);
    }

    const enviarForm = (event) => {
        event.preventDefault();
        if (valorInput.trim().length <= 1) return;
        onNewValor(valorInput.trim());
        setValorInput('');
    };

return(
    <>
        <form onSubmit={ enviarForm }>
        <input 
            type="text" 
            id="textoIngresado" 
            placeholder="Ingrese el anime..."
            value={valorInput}
            onChange={ (event) => onInputChange(event) }
        />
        </form>
    </>
);
};