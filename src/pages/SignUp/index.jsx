import { Link } from "react-router-dom";
import { AppTitle } from "../../components/AppTitle";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Container, Form } from "./styles";

export function SignUp() {
  return (
    <Container>
      <AppTitle />

      <Form>
        <InputText
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          required
        />

        <InputText
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          required
        />

        <InputText
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minlength="6"
          type="password"
          required
        />

        <Button title="Criar conta" />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
