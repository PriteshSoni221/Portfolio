import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;  

    }
    
    html {
        font-size: 62.5%;
        /* scroll-behavior: smooth; */
    }

    body{
        background-color: ${(props) => props.theme.lightTheme.backgroundColor};
        font-family: ${(props) => props.theme.fonts.main};
        font-size: 1.6rem;
        overflow-x: hidden;
        /* margin:0 1rem; */
    }

    h1,h2,h3,h4,h5,h6,button {
    font-family: ${(props) => props.theme.fonts.title};
    }

    a {
        text-decoration: none;
    }

    li{
        list-style: none;
    }
    
`;
