var detectBrowser = require('detect-browser');
var browser = detectBrowser.detect();

exports.onClientEntry = function() {
  if (browser.name === 'ie') {
    window.location = 'https://browsehappy.com/';
  }
};

exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log('prev: location: ', prevLocation);
  if (location.pathname.match(/\/.*[0-9]+/)) {
    const element = document.querySelector('#post-list-container');
    element.scrollIntoView();
  }
};

exports.shouldUpdateScroll = ({
  prevRouterProps: { location: prevLocation },
  routerProps: { location },
}) => {
  console.log('yo');
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
