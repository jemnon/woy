module.exports = {
  template: require('./svgr-templates/template'),
  svgProps: {
    width: '{width}',
    height: '{height}',
    fill: '{fill}',
    viewBox: '{viewBox}',
    preserveAspectRatio: 'xMidYMid meet',
    style: '{style}',
  },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
};
