module.exports = {
  '*.{t,j}sx?'                                            : ['npm run lint:eslint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'npm run prettier --parser json',
  ],
  'package.json'            : ['npm run prettier'],
  '*.vue'                   : ['npm run lint:eslint', 'npm run lint:stylelint'],
  '*.sc?ss'                 : ['npm run lint:stylelint', 'npm run prettier'],
  '*.md'                    : ['npm run lint:markdownlint', 'npm run prettier'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}
