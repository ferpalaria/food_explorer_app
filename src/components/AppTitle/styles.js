import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10.74px;
    font-size: 20px;
    height: ${props => props.heigth};
    
    > h1 {
        font-size: ${props => props.fontSize};
    };
    
    > img {
        width: ${props => props.iconSize};
        height: ${props => props.iconSize}; 
    }
`;
