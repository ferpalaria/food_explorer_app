import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8rem 4rem 3.5rem;

    height: 14.25rem;
    background-color: ${props => props.theme.DARK.D_700};
`;

export const Icon = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
`;

export const Order = styled.div`

    position: relative;

    > button {
        width: 2.5rem;
        height: 2.5rem;

        background-color: ${props => props.theme.TINTS.TOMATO_100};
        border-radius: 50%;

        font-size: 1.75rem;
        font-family: 'Poppins', sans-serif;
        font-weight: 500;

        border: none;
        color: ${props => props.theme.LIGHT.L_100};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 2rem;
        left: 2rem;
    }
`;