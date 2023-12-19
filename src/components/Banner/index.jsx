import { Container, Gradient, Texto } from "./styles";
import banner from "../../assets/images/banner2.png";

export function Banner() {
  return (
    <Container>
      <img src={banner} />

      <Gradient>
        <Texto>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </Texto>
      </Gradient>
    </Container>
  );
}
