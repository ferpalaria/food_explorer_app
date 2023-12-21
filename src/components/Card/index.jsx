import { Amount, Container, Vector, Dish, Price, Title } from "./styles";

import heartIcon from "../../assets/icons/Heart.png";
import plusIcon from "../../assets/icons/Plus.png";
import minusIcon from "../../assets/icons/Minus.png";
import photo from "../../assets/images/pratos/saladas/Mask group-3.png";
import { Button } from "../Button";

export function Card({ title, ...rest }) {
  return (
    <Container>
      <Vector src={heartIcon} />
      <Dish src={photo} />
      <Title>{title}Salada Ravanello &gt;</Title>
      <Price>R$ 49,97</Price>
      <Amount>
        <button><img src={minusIcon}/></button>
        01
        <button><img src={plusIcon}/></button>
      </Amount>

      <Button title="incluir" />
    </Container>
  );
}
