import { Container, Gradient, Texto } from "./styles";
import banner from "../../assets/images/banner_full.png";

export function Banner() {
  return (
    <Container>
      <Gradient />
      <div>
        <img src={banner} />

        <Texto>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
        </Texto>
      </div>

    </Container>
  );
}
