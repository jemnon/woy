import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    /* TODO: remove once conversion to styled-breakpoints is done */
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
    darkOrange: '#BB5B34',
    orange: '#cf7651',
    white: '#ffffff',
    red: '#ff4136',
    green: '#19a974',
  },
  maxWidths: {
    sm: '480px',
    md: '960px',
    lg: '1440px',
  },
  spacing: {
    s1: '0.25rem' /* 4px */,
    s2: '0.5rem' /*  8px */,
    s3: '0.75rem' /* 12px */,
    s4: '1rem' /* 16px */,
    s5: '1.25rem' /* 20px */,
    s6: '1.5rem' /* 24px */,
    s7: '1.75rem' /* 28px */,
    s8: '2rem' /* 32px */,
    s9: '2.25rem' /* 36px */,
    s10: '2.5rem' /* 40px */,
    s11: '2.75rem' /* 44px */,
    s12: '3rem' /* 48px */,
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
