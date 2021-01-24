function template(
  { template },
  opts,
  { imports, componentName, props, jsx, exports },
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  return template.ast`
    ${imports};
    import styled from 'styled-components';

    const SVG = (${props}) => ${jsx};

    const ${componentName} = styled(SVG)\`
      display: \${({display = 'inline-block'}) => display};
      font-size: \${({fontSize = '32px'}) => fontSize};
      color: \${({color = '#111'}) => color};
      vertical-align: middle;
      shape-rendering: inherit;
      transform: translate3d(0, 0, 0);
    \`;

    export default ${componentName};
  `;
}

module.exports = template;
