import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    /* TODO: remove once conversion to styled-components is done */
    desktop: 'screen and (min-width: 960px)',
    tablet: 'screen and (min-width: 480px) and (max-width: 959px)',
    mobile: 'screen and (max-width: 479px)',
    /* ^^ */
    sm: '480px',
    md: '960px',
    lg: '1440px',
    xlg: '1920px',
  },
  fonts: {
    latoBold:
      `"Lato Bold", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    lato:
      `"Lato", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    latoItalic:
      `"Lato Italic", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    noto:
      `"Noto Serif TC", -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
  },
  colors: {
    cream: '#f4ede6',
    darkTeal: '#162936',
    teal: '#244c53',
    lightBrown: '#d5a188',
    nearBlack: '#111',
    nearWhite: '#F9F9F9',
    orange: '#cf7651',
    white: '#ffffff',
    red: '#ff4136',
    green: '#19a974',
  },
  spacing: {
    xxs: '0.25rem',
    xs: '0.5rem',
    sm: '0.75rem',
    m: '1rem',
    l: '1.5rem',
    xl: '2rem',
    xxl: '2.5rem',
    xxxl: '3rem',
  },
  transition: 'all 0.47s ease',
  zIndex: {
    z0: '0',
    z1: '1',
    z2: '2',
    z3: '3',
    z4: '4',
    z5: '5',
    z6: '6',
    z999: '999',
    z9999: '9999',
  },
};

export default theme;
