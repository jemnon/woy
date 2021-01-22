function defaultTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx'];
  if (opts.typescript) {
    plugins.push('typescript');
  }
  const typeScriptTpl = template.smart({ plugins });
  return typeScriptTpl.ast`${imports}
${interfaces}
const ${componentName} = ({ fill="#000", width="100%", height="100%", viewBox="0 0 32 32", style={width: '32px', height: '32px'}, ...props}) => ${jsx}
${exports}
  `;
}
module.exports = defaultTemplate;
