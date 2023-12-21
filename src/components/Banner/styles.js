import styled from "styled-components";

export const Container = styled.div`
    min-width: 53.5rem;

    max-height: 18.62rem;
    position: relative;
    margin: 15px auto 62px;
    
    > div {
        display: flex;
        
        > img {
            width: 24rem;
            transform: rotateY(180deg);
        }; 
    }
    overflow: hidden;
`;

export const Texto = styled.div`
    width: 202px;
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.LIGHT.L_300};
    display: flex;
    flex-direction: column;
    gap: 0.37rem;

    padding-top: 8.125rem;
    
    > h1 {
        font-size: 2.25rem;
        font-weight: bold;
        line-height: 3.15rem;
    };
    
    > p {
        font-size: 1.5rem;
        font-weight: ${props => props.theme.FONT_SIZE.THIN};
        line-height: 2.1rem;
    };
`;

export const Gradient = styled.div`
    width: 47rem;
    height: 15rem;
    flex-shrink: 0;

    border-radius: 0.36rem;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
    background-repeat: no-repeat;
    background-position: bottom;

    position: absolute;
    z-index: -1;
    right: 2rem;
    bottom:0;
`;