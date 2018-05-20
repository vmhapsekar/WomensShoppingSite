import {css} from 'styled-components'

const sizes = {
  phone: 376,
  largePhone: 480,
  tablet: 768,
  desktop: 992,
  giant: 1170,
  huge: 1600
}

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: (...args) => css`
      @media(max-width: ${sizes[size]}px) {
        ${css(...args)}
      }
    `
  }
}, {})

export default media;