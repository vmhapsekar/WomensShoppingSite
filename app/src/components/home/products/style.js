import styled, {css} from 'styled-components'

export const ProductStatus = styled.div`
  color: white;
  text-align: center;
  padding: 5px;
  width: auto;
  ${props => props.isExclusive && css`
    background-color: red;
  `}
  ${props => props.isSale && css`
    background-color: green;
  `}
`

export const ProductName = styled.div`
  display: inline;
  float: left;
  color: black;
`

export const ProductPrice = styled.h2`
  display: inline;
  float: right;
  color: black;
`
