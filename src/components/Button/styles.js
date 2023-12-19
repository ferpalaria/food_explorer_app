import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${props => props.theme.TINTS.TOMATO_100};
  color: ${props => props.theme.LIGHT.L_100};

  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  
  height: 46px;
  border: 0;
  padding: 0 16px;  
  border-radius: 7px;
  font-weight: ${props => props.theme.FONT_SIZE.MEDIUM};

  &:disabled {
    opacity: .5;
  }
`;