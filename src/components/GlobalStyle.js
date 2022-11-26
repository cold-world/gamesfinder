import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    a{
      text-decoration: none;
      color: black;
    }
    &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: grey;
    border-radius:10px;
  } 
  }

/* html {
  &::-webkit-scrollbar{
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb{
    background-color: grey;
    border-radius:10px;
  }
} */

body{
  color: #242423;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  
}

h2{
  font-family: 'Anton', sans-serif;
  font-size: 3rem;
}

h3{
  font-size: 1.5rem;
  font-weight: regular;
}

p{
  line-height: 1.5;
  font-weight: regular;
}
`;
