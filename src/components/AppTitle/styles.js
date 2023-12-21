import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10.74px;
    font-size: 20px;

    > h1 {
        font-size: 40px;
        line-height: 32px;
    };
    
    > img {
        width: 43.31px;
        height: 43.31px;

        background: ${({ theme }) => theme.TINTS.CAKE_100};

        clip-path: polygon(
            50% 0%,
            40.41px 10.83px,
            40.41px 32.49px,
            50% 100%,
            2.9px 32.49px,
            2.9px 10.83px
        );
    }
`;