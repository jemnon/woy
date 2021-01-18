import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }      
  html {
    line-height: 1.5;
    font-family:  "Lato", -apple-system, system-ui,
                "avenir next", avenir, "Helvetica Neue", helvetica, ubuntu, roboto,
                noto, 'Segoe UI', Arial, sans-serif;
    font-weight: normal;
    font-size: 1rem;
  }
  body {
    margin: 0;
    padding: 0;
        -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body.disable-scroll {
    overflow: hidden;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Noto Serif TC", BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue'
      helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    margin: 0;
  } 
  p {
    margin-top: 0;
    margin-bottom: 1.5rem;
  }
  figure {
    margin: 0;
  }
  ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
  }
  sup {
    top: 0;
  }
  img {
    max-width: 100%;
    border-style: none;
  }
  
`;

export default GlobalStyle;
