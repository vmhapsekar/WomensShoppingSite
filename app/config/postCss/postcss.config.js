/**
 * Contains example values so we know how to set it up for us later!
 * https://github.com/MoOx/postcss-cssnext
 *
 *
 * Before using customProperties or customMedia consider the following:
 * -- customProperties could become css variables e.g. see colors.css
 * -- customMedia - see https://github.com/postcss/postcss-custom-media or check out http://cssnext.io/features/#custom-media-queries and http://cssnext.io/features/#media-queries-ranges and then add to global.css
*/

module.exports = {
  map: true,
  plugins: {
    'postcss-import': {
      root: __dirname
    },
    'postcss-cssnext': {},
    'postcss-nested': {},
    'postcss-extend': {}
  },
  customProperties: {
    variables: {
      c_bg: '#222'
    }
  },
  customMedia: {
    extensions: {
      v_small: '(min-width: 30rem)',
      v_medium: '(min-width: 48rem)'
    }
  }
}
