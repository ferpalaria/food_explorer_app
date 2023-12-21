import { Amount, Container, Vector, Dish, Price, Title } from "./styles";

import heartIcon from "../../assets/icons/Heart.png";
import photo from "../../assets/images/pratos/saladas/Mask group-3.png";
import { Button } from "../Button";
import { Stepper } from "../Stepper";

export function Card({ title, ...rest }) {
  return (
    <Container>
      <Vector src={heartIcon} />
      <Dish src={photo} />
      <Title>{title}Salada Ravanello &gt;</Title>
      <Price>R$ 49,97</Price>
      <Stepper/>
      <Button title="incluir" />
    </Container>
  );
}
