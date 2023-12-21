import { Container } from "./styles";
import plusIcon from "../../assets/icons/Plus.png";
import minusIcon from "../../assets/icons/Minus.png";


export function Stepper() {
  return (
    <Container>
         <button><img src={minusIcon}/></button>
            01
        <button><img src={plusIcon}/></button>
    </Container>
  );
}
