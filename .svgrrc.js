module.exports = {
  template: require('./svgr-templates/icon-template'),
  indexTemplate: require('./svgr-templates/index-template'),
  svgProps: {
    preserveAspectRatio: 'xMidYMid meet',
  },
  svgoConfig: {
    plugins: {
      removeViewBox: false,
    },
  },
  replaceAttrValues: {
    '#111': '{props.color}',
  },
};
