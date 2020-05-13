module.exports = {
  '*.{t,j}sx?'                                            : ['npm run lint:eslint'],
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': [
    'npm run pretty --parser json',
  ],
  'package.json'            : ['npm run pretty'],
  '*.vue'                   : ['npm run lint:eslint', 'npm run lint:stylelint'],
  '*.sc?ss'                 : ['npm run lint:stylelint'],
  '*.md'                    : ['npm run lint:markdownlint'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}
