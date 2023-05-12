import styled from "@emotion/styled";
import React, { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 25px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 15px;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 7px;

  font-family: "Lato", sans-serif;
`;

const useSelectMoneda = (label, opciones) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option>Seleccionar</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};

export default useSelectMoneda;
