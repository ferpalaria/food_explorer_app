import styled from "styled-components";

export const Container = styled.section`
    width: 53.5rem;
    padding-left: 3rem;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    > span {
        font-family: 'Poppins', sans-serif;
        font-size: 2.25rem;
        font-weight: 500;
        line-height: 3.15rem;
        color: ${props => props.theme.LIGHT.L_300};
    }
`;

export const Carousel_Slider = styled.div`
    display: flex;
    gap: 16px;
    overflow-x: scroll;

    scrollbar-width: none; 
`; 