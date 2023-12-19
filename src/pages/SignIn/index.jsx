import { AppTitle } from "../../components/AppTitle";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Container, Form } from "./styles";

export function SignIn() {
  return (
    <Container>
      <Form>
        <AppTitle/>

        <InputText
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
        />

        <InputText
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          minlength="6"
          type="password"
          required
        />

        <Button title="Entrar" />

        <a>Criar uma conta</a>

      </Form>
    </Container>
  );
}
