import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }      
  body {
    line-height: 1.5;
    font-family: ${({ theme }): string => theme.fonts.lato};
    font-weight: normal;
    font-size: 1rem;

    color: ${({ theme }): string => theme.colors.nearBlack};

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
    font-family: "Noto Serif TC", 'serif';
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    line-height: 1.5;
    margin: 0;
  } 
  p {
    font-size: ${({ theme }): string => theme.fontSizes.f1};
    margin-top: 0;
    margin-bottom: ${({ theme }): string => theme.spacing.sm4};
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
