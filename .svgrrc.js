module.exports = {
  template: require('./svgr-templates/template'),
  replaceAttrValues: {
    '#000': '{props.fill}',
    '32px': '{props.height}',
  },
};
