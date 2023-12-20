import styled from "styled-components";
import gradient from "../../assets/images/Rectangle.svg";

export const Container = styled.div`
    display: flex;
    align-items: end;
    margin: 15px auto 62px;

    > img {
        height: 150px;
    }; 

`;

export const Gradient = styled.div`
    width: 376px;
    height: 120px;

    border-radius: 3px;

    background-image: url(${gradient});

    position: absolute;
    z-index: -1;
    left: 32px; 
`;

export const Texto = styled.div`
    width: 202px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.LIGHT.L_300};
    display: flex;
    flex-direction: column;
    gap: 3px;
    
    > h1 {
        font-size: 18px;
        font-weight: bold;
        line-height: 140%;
    };
    
    > p {
        font-size: 12px;
        font-weight: ${props => props.theme.FONT_SIZE.THIN};
        line-height: 140%;
    };

    position: absolute;
    right: 22px;
    bottom: 22px;
`;