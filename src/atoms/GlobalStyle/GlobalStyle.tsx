import { createGlobalStyle } from 'styled-components';
import { up } from 'styled-breakpoints';
import { sharedCSS as HeadingCSS } from '../Headings';
import { ParagraphCSS } from '../Paragraph';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }      
  body {
    line-height: 1.6;
    font-family: ${({ theme }): string => theme.fonts.lato};
    font-weight: normal;
    font-size: 1rem;

    color: ${({ theme }): string => theme.colors.nearBlack};

    margin: 0;
    padding: 0;
  }
  body.disable-scroll {
    overflow: hidden;
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
    ${ParagraphCSS};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${HeadingCSS};
  }
  h1 {
    font-size: ${({ theme }): string => theme.fontSizes.f10};
    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f11};
    }
    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f13};
    }
  }
  h2 {
    font-size: ${({ theme }): string => theme.fontSizes.f9};

    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f10};
    }

    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f12};
    }
  }
  h3 {
    font-size: ${({ theme }): string => theme.fontSizes.f8};

    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f9};
    }

    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f11};
    }
  }
  h4 {
    font-size: ${({ theme }): string => theme.fontSizes.f7};

    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f8};
    }

    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f10};
    }
  }
  h5 {
    font-size: ${({ theme }): string => theme.fontSizes.f6};

    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f7};
    }

    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f9};
    }
  }
  h6 {
    font-size: ${({ theme }): string => theme.fontSizes.f5};

    ${up('sm')} {
      font-size: ${({ theme }): string => theme.fontSizes.f6};
    }

    ${up('lg')} {
      font-size: ${({ theme }): string => theme.fontSizes.f8};
    }
  }
  a {
    font-style: italic;
    color: ${({ theme: { colors } }): string => colors.orange};
    text-decoration: none;
    transition: ${({ theme }): string => theme.transition};

    &:hover {
      color: ${({ theme: { colors } }): string => colors.nearBlack};
    }
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
  button {
    padding: 0;
    border-style: none;
    border-width: 0;
    outline: 0;
    background-color: transparent;
    cursor: pointer;
    text-align: left;
  }
  #gatsby-focus-wrapper {
    height: 100%;
  } 
`;

export default GlobalStyle;
