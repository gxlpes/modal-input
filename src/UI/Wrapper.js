import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vh;
`;

export const GlobalStyle = createGlobalStyle`

* {
  border-radius: 5px;
  font-family: "Roboto", sans-serif;
  outline: none;  
}

`;
