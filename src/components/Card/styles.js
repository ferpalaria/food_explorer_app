import styled from "styled-components";


export const Container = styled.div`
    min-width: 210px;
    height: 292px;
    background-color: ${props => props.theme.DARK.D_200};
    border-radius: 8px;

    padding: 3rem;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    > button {
        width: 162px;
        height: 32px;
    }
`;

export const Vector = styled.img`
    position: absolute;
    right: 16px;
    top: 16px;
`;

export const Dish = styled.img`
    width: 11rem;
`; 

export const Title = styled.span`
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.LIGHT.L_300};
    font-weight: 500;
    font-size: 1.75rem;
    line-height: 3rem;
`;

export const Price = styled.span`
    color: ${props => props.theme.TINTS.CAKE_200};
    font-weight: 400;
    line-height: 2rem;
`;

export const Amount = styled.span`
    display: flex;
    align-items: center;
    gap: 1.75rem;
    padding: 0.5rem 0rem;

    > button {
        height: 18px;
        width: 18px;
        cursor: pointer;

        background-color: transparent;
        border: none;

        display: flex;
        align-items: center;
    }
`;