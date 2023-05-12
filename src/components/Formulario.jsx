import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Error from "./Error";
import useSelectMoneda from "../hooks/useSelectMoneda";
import { monedas } from "../data/monedas";

const InputSubmit = styled.input`
  background-color: #a161c1;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #794a91;
    cursor: pointer;
  }
`;

const Formulario = ({setMonedas}) => {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMoneda] = useSelectMoneda(
    "Seleccionar tu moneda",
    monedas
  );
  const [criptomoneda, SelectCriptomoneda] = useSelectMoneda(
    "Seleccionar criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCripto = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCripto);
    };
    consultarAPI();
  }, []);

  const handleSubmit = e => {
    e.preventDefault()
   if([moneda, criptomoneda].includes('')){
    setError(true)
    return
   } 
   setError(false)
   setMonedas({
    moneda,
    criptomoneda
   })
}

  return (
   <>
   {error && <Error>Todos los campos son obligatorios</Error>}
    <form onSubmit={handleSubmit}>
      <SelectMoneda />
      <SelectCriptomoneda/>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
   </>
  );
};

export default Formulario;
