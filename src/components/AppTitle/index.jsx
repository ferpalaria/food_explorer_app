import { Container } from "./styles";
import logo from '../../assets/icons/logo.svg'

export function AppTitle({ fontSize, iconSize }) {
    return (
        <Container
            fontSize={fontSize}
            iconSize={iconSize}
        >
            <img src={logo}/>
            <h1>food explorer</h1>
        </Container>
    );
}