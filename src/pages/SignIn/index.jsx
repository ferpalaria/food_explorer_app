import { AppTitle } from "../../components/AppTitle";
import { Button } from "../../components/Button";
import { InputText } from "../../components/InputText";
import { Container, Form } from "./styles";
import { useNavigate } from 'react-router-dom';

export function SignIn() {

  const navigate = useNavigate();

  function handleSignUp(){
    navigate("/register")
  }

  function handleHome(){
    navigate("/main")
  }

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
          minLength="6"
          type="password"
          required
        />

        <Button title="Entrar" onClick={handleHome}/>

        <a
        onClick={handleSignUp}>
          Criar uma conta</a>

      </Form>
    </Container>
  );
}
