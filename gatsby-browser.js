var detectBrowser = require('detect-browser');
var browser = detectBrowser.detect();

exports.onClientEntry = () => {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};
