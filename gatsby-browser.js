const { detect } = require('detect-browser');
const browser = detect();

exports.onClientEntry = () => {
  if (browser.name === 'ie') {
    window.location.href = 'https://browsehappy.com/';
  }
};
