import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%; 
    font-family: "IPAexゴシック";
    background-color: #f1f1f1;
    word-break: keep-all;
    width: 50rem;
    margin: 0 auto;
  }
`;

export default GlobalStyle;