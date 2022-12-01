import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 10px;

    --white: hsl(0, 0%, 100%);
    --red:  hsl(0, 100%, 66%);
    --light-grayish-violet: hsl(270, 3%, 87%);
    --dark-grayish-violet: hsl(279, 6%, 55%);
    --dark-violet: hsl(278, 68%, 11%);

    --linear-gradient-1: hsl(249, 99%, 64%);
    --linear-gradient-2: hsl(278, 94%, 30%);
  }

  *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 1.8rem;
  }

  body, input, textarea, button, a {
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  } 
`