/* eslint-disable @typescript-eslint/no-var-requires */
const IN_PRODUCTION = process.env.NODE_ENV === 'production'
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  defaultExtractor (content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      '',
    )
    return (
      contentWithoutStyleBlocks.match(/[A-Za-z0-9-_/:]*[A-Za-z0-9-_/]+/g) || []
    )
  },
  whitelist        : [],
  whitelistPatterns: [
    /-(leave|enter|appear)(|-(to|from|active))$/,
    /^(?!(|.*?:)cursor-move).+-move$/,
    /^router-link(|-exact)-active$/,
    /data-v-.*/,
  ],
})

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-preset-env')({ stage: 1 }),
    ...(IN_PRODUCTION ? [purgecss] : []),
  ],
}
