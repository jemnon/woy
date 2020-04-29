var detectBrowser = require('detect-browser');
var browser = detectBrowser.detect();

exports.onClientEntry = function() {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};
