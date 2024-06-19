import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  padding-top: 19.75rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`;


export const Form = styled.form`  
  min-width: 316px;
  
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 32px;

  padding-top: 9.21rem;

  & div {
    display: flex;
    gap: 8px;
  }

  > h1 {
    font-size: 40px;
    margin-bottom: 24px;
    line-height: 32px;
  }

  > a {
    font-size: 14px;
    color: ${(props) => props.theme.LIGHT.L_100};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`;

export const Polygon = styled.form`
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
`;
