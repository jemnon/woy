const prompt = {
  type: 'input',
  name: 'name',
  message: 'Component Name (use Pascal Case):',
  validate(value) {
    if (/^[A-Z][a-z]+(?:[A-Z][a-z]+)*$/.test(value)) {
      return true;
    }
    return 'Name needs to be PascalCase (I told you this...)';
  },
};

const getActions = (type = 'atoms') => [
  {
    type: 'add',
    path: `src/${type}/{{properCase name}}/index.tsx`,
    templateFile: 'plop-templates/index.hbs',
  },
  {
    type: 'add',
    path: `src/${type}/{{properCase name}}/stories/{{properCase name}}.stories.tsx`,
    templateFile: 'plop-templates/stories.hbs',
  },
  {
    type: 'add',
    path: `src/${type}/{{properCase name}}/{{properCase name}}.tsx`,
    templateFile: 'plop-templates/component.hbs',
  },
  {
    type: 'add',
    path: `src/${type}/{{properCase name}}/__tests__/{{properCase name}}.test.tsx`,
    templateFile: 'plop-templates/tests.hbs',
  },
];

module.exports = plop => {
  plop.setPartial('injectPascalCaseName', '{{properCase name}}');
  plop.setPartial('injectDashCaseName', '{{dashCase name}}');
  plop.setGenerator('Atom Component', {
    description: 'This will generate a component in /src/atoms',
    prompts: [{ ...prompt }],
    actions: getActions('atoms'),
  });
  plop.setGenerator('Molecule Component', {
    description: 'This will generate a component in /src/molecules',
    prompts: [{ ...prompt }],
    actions: getActions('molecules'),
  });
  plop.setGenerator('Organism Component', {
    description: 'This will generate a component in /src/organism',
    prompts: [{ ...prompt }],
    actions: getActions('organisms'),
  });
};
