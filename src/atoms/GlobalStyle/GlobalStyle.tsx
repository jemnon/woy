import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'notoseriftc-bold-webfont';
    src: url('../../fonts/notoseriftc-bold-webfont.woff2') format('woff2'),
        url('../../fonts/notoseriftc-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'latoregular';
    src: url('../../fonts/lato-regular-webfont.woff2') format('woff2'),
         url('.../../fonts/lato-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
  }      
  html {
    line-height: 1.5;
  }
  body {
    margin: 0;
    padding: 0;
    font-family:  "latoregular", -apple-system, system-ui,
                "avenir next", avenir, "Helvetica Neue", helvetica, ubuntu, roboto,
                noto, 'Segoe UI', Arial, sans-serif;
    font-size: 1rem;
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
    margin: 0;
    font-weight: 700;
  } 
  p {

    font-weight: normal;
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
