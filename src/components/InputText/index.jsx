import { Container } from "./styles";

export function InputText({ label, placeholder, minlength, ...rest }){
    return (
        <Container>
            <label htmlFor={label}>{label}</label> 
            <input type="text" placeholder={placeholder} name={label} {...rest}/>
        </Container>
    );
}