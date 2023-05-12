import styled from "@emotion/styled";

const Contenedor = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 5px;
`;
const Imagen = styled.img`
    display:block;
    width: 110px;
`;

const Texto = styled.p`
  font-size: 18px;
  font-weight: 900;
  span {
    font-weight: 400;
  }
`;
const Precio = styled.p`
  font-size: 23px;
  font-weight: 900;
`;

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return (
    <Contenedor>
      <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
      <div>
        <Precio>
          Precio cripto: <span>{PRICE}</span>
        </Precio>

        <Texto>
          Precio más alto del día: <span>{HIGHDAY}</span>
        </Texto>

        <Texto>
          Precio más bajo del día: <span>{LOWDAY}</span>
        </Texto>

        <Texto>
          Variación últimas 24hs: <span>{CHANGEPCT24HOUR}</span>
        </Texto>

        <Texto>
          Última actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
};

export default Resultado;
