import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddElemento = ({ onNewValor }) => {
  const [valorInput, setValorInput] = useState("");

  const onInputChange = (event) => {
    setValorInput(event.target.value);
  };

  const enviarForm = (event) => {
    event.preventDefault();
    if (valorInput.trim().length <= 1) return;
    onNewValor(valorInput.trim());
    setValorInput("");
  };

  return (
    <>
      <form onSubmit={enviarForm} aria-label="form">
        <input
          type="text"
          id="textoIngresado"
          placeholder="Ingrese el anime..."
          value={valorInput}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </>
  );
};

AddElemento.propTypes = {
    onNewValor: PropTypes.func.isRequired,
}
