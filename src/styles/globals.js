import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }

    :root {
        font-size: 8px;
    }

    body {
        background-color: ${({ theme }) => theme.DARK.D_400};
        color: ${({ theme }) => theme.LIGHT.L_100};
        -webkit-font-smoothing: antialised;
    }
    
    body, input, button, textarea {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        outline: none;
    } 

    ::-webkit-scrollbar {
        width: 8px;
        display:none;
    }

    ::-webkit-scrollbar-track {
        background-color: #2c2c31;
    }
    
    ::-webkit-scrollbar-thumb {
        background-color: #9e9ea0;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }
    `;