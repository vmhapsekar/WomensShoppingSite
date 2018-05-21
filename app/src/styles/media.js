import {css} from 'styled-components'

// Define sizes for almost all displays. Displays above 1600px not supported
const sizes = {
  phone: 376,
  largePhone: 480,
  tablet: 768,
  desktop: 992,
  giant: 1170,
  huge: 1600
}

// Pass any css as arguments and choose the display to make it responsive. No need of writing media query!!!
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

export default media
