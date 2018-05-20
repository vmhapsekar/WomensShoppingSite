import styled, {css} from 'styled-components'

export const ProductWrapper = styled.div`
  width: 287px;
  height: 320px;
  padding: 30px 5px;
  border: 1px solid grey;
`

export const ProductStatus = styled.div`
  color: white;
  text-align: center;
  min-height: 27px;
  ${props => props.isExclusive && css`
    background-color: red;
  `}
  ${props => props.isSale && css`
    background-color: green;
  `}
`

export const ProductName = styled.div`
  display: table-cell;
  line-height: 30px;
  position: relative;
  vertically-align: bottom;
  left: 0px;
  color: black;
`

export const ProductPrice = styled.h2`
  display: inline;
  position: relative;
  right: 0px;
  color: black;
`

export const ProductImage = styled.img`
  width: 100%;
  margin: 0 auto;
`
