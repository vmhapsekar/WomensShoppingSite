import styled, { css } from 'styled-components'
import media from '../../../styles/media'

export const Wrapper = styled.div`
  padding: 0;
  background-color: #E0FFFF;
  ${media.desktop`
      width: 110%;
  `}
  ${media.giant`
      width: 110%;
  `}
  ${media.huge`
      width: 102.5%;
  `}
  ${media.tablet`
      width: 134%;
  `}
  ${media.largePhone`
      width: 90%;
  `}
  ${media.phone`
      width: 90%;
  `}
`

export const Title = styled.h2`
  color: black;
`

export const Filter = styled.select`
  -webkit-appearance: menulist-button;
  border-color: rgb(153, 153, 153);
  height: 30px;
  width: 100%;
  margin: 0 auto;
`