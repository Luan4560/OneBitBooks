import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f0f5;
    --white: #fff;
    
    --blue-100: #33bfcb;
    --gray-100:  #878c99;
    --gray-200:  #333;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: var(--background);
  }

  button {
    cursor: pointer;
  }
`