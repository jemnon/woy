import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    xxsm: '0px',
    xsm: '320px',
    sm: '640px',
    md: '960px',
    lg: '1280px',
    xlg: '1920px',
  },
  colors: {
    cream: '#f4ede6',
    gray: '#aaa',
    green: '#19a974',
    lightGray: '#E0E0E0',
    midGray: '#666',
    nearBlack: '#111',
    nearWhite: '#F9F9F9',
    orange: '#BB5B34',
    red: '#ff4136',
    teal: '#244c53',
    white: '#fff',
  },
  fonts: {
    lato:
      `"Lato", BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
    noto:
      `"Noto Serif TC", BlinkMacSystemFont, 'avenir next', avenir, 'Helvetica Neue', ` +
      `helvetica, ubuntu, roboto, noto, 'Segoe UI', Arial, sans-serif`,
  },
  fontSizes: {
    'f-xsm': '0.75rem' /* 12px */,
    'f-sm': '0.875rem' /* 14px */,
    f1: '1rem' /* 16px */,
    f2: '1.125rem' /* 18px */,
    f3: '1.25rem' /* 20px */,
    f4: '1.3125rem' /* 21px */,
    f5: '1.5rem' /* 24px */,
    f6: '1.625rem' /* 26px */,
    f7: '1.75rem' /* 28px */,
    f8: '1.875rem' /* 30px */,
    f9: '2rem' /* 32px */,
    f10: '2.25rem' /* 36px */,
    f11: '2.5rem' /* 40px */,
    f12: '2.625rem' /* 42px */,
    f13: '3rem' /* 48px */,
  },
  focusColors: {
    blue: 'rgba(0, 119, 187, 0.5)',
  },
  header: {
    height: '4rem',
  },
  hoverColors: {
    orange: '#A2421B',
    teal: '#162936',
    nearBlack: '#2B2B2B',
  },
  maxWidths: {
    sm: '640px',
    md: '960px',
    lg: '1280px',
    xlg: '1440px',
  },
  spacing: {
    'sp-0': '0',
    sm1: '0.25rem' /* 4px */,
    sm2: '0.5rem' /*  8px */,
    sm3: '0.75rem' /* 12px */,
    sm4: '1rem' /* 16px */,
    md1: '1.25rem' /* 20px */,
    md2: '1.5rem' /* 24px */,
    md3: '1.75rem' /* 28px */,
    md4: '2rem' /* 32px */,
    lg1: '2.25rem' /* 36px */,
    lg2: '2.5rem' /* 40px */,
    lg3: '2.75rem' /* 44px */,
    lg4: '3rem' /* 48px */,
    xlg1: '3.25rem' /* 52px */,
    xlg2: '3.5rem' /* 56px */,
    xlg3: '3.75rem' /* 60px */,
    xlg4: '4rem' /* 64px */,
  },
  transition: 'all 0.15s ease',
  zIndex: {
    z0: '0',
    z1: '1',
    z2: '2',
    z3: '3',
    z4: '4',
    z5: '5',
    z6: '6',
    z995: '995',
    z996: '996',
    z997: '997',
    z998: '998',
    z999: '999',
    z9999: '9999',
  },
};

export default theme;
