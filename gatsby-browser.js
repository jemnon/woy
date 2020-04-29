const { detect } = require('detect-browser');
const browser = detect();

exports.onClientEntry = () => {
  console.log('browser name: ', browser.name);
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};
