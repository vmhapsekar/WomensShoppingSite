
import React from 'react'

import styled from 'styled-components'

import { AnzGrid, AnzRow, AnzCol } from '../index'

const ColInner = styled.div`
  background: #f0faff;
  border-radius: 3px;
  padding: 16px;
  margin: 0 0 16px;
  border: 1px solid #93c7e5;
`

const Doc = () => (
  <AnzGrid fluid>
    <AnzRow>
      <AnzCol xs={12} sm={6} md={4} lg={3}>
        <ColInner>Column 1</ColInner>
      </AnzCol>
      <AnzCol xs={12} sm={6} md={4} lg={3}>
        <ColInner>Column 2</ColInner>
      </AnzCol>
      <AnzCol xs={12} sm={6} md={4} lg={3}>
        <ColInner>Column 3</ColInner>
      </AnzCol>
      <AnzCol xs={12} sm={6} md={4} lg={3}>
        <ColInner>Column 4</ColInner>
      </AnzCol>
    </AnzRow>
  </AnzGrid>
)

export default Doc
