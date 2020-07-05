var detectBrowser = require('detect-browser');
const { isCallChain } = require('typescript');
var browser = detectBrowser.detect();

exports.onClientEntry = function() {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};

exports.onRouteUpdate = ({ location, prevLocation }) => {};

exports.shouldUpdateScroll = ({
  prevRouterProps: { location: prevLocation },
  routerProps: { location },
}) => {
  if (
    location.pathname.match(/\/.*[0-9]+/) ||
    (prevLocation.pathname.match(/\/.*[0-9]+/) &&
      location.pathname.match(/\/.*[0-9]+/))
  ) {
    return false;
  }
  if (prevLocation.pathname.match(/\/.*[0-9]+/) && location.pathname === '/') {
    return false;
  }
};
