import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%; 
    font-family: "IPAexゴシック";
    background-color: #f1f1f1;
    word-break: keep-all;
    margin: 0 auto;
    background-image: -webkit-radial-gradient(51% 96%, #E7E9E4 10%, #D4D6D1 96%);
    background-image: radial-gradient(51% 96%, #E7E9E4 10%, #D4D6D1 96%); 
    width: 500px;
    margin: 0 auto;
    @media(max-width: 500px) {
      width: 100%;
    }
`;

export default GlobalStyle;
