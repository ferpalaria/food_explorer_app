import { Card } from "../Card";
import { Carousel_Slider, Container } from "./styles";

export function Section({ title, ...rest }){
    return (
        <Container>
            <span>{title}</span>
            <Carousel_Slider {...rest}/>
        </Container>
    );
}