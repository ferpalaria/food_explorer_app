import styled from "styled-components";

export const Container = styled.div`
  min-width: 53.5rem;

  display: grid;
  grid-template-rows: 14.25rem auto;
  grid-template-areas:
    "header"
    "content";
`;

export const Content = styled.div`
  grid-area: content;
`;
