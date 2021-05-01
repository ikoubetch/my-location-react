module.exports = function (plop) {
  plop.setGenerator('atom', {
    description: 'application atom logic',
    prompts: [
      {
        type: 'list',
        choices: ['atom', 'molecule', 'organism', 'template'],
        name: 'category',
        message: 'Category'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Name'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/index.js',
        templateFile: 'templates/index.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{category}}s/{{pascalCase name}}/{{name}}.test.js',
        templateFile: 'templates/test.js.hbs'
      }
    ]
  })
}
