import React from 'react'

import {ThemeProvider} from 'styled-components'
import {Row, Col} from 'react-styled-flexboxgrid'

import {theme, StyledGrid} from './styles'

export const Grid = (props) => (
  <ThemeProvider theme={theme}>
    <StyledGrid {...props}>
      {props.children}
    </StyledGrid>
  </ThemeProvider>
)

export const GRow = (props) => (
  <ThemeProvider theme={theme}>
    <Row {...props}>
      {props.children}
    </Row>
  </ThemeProvider>
)

export const GCol = (props) => (
  <ThemeProvider theme={theme}>
    <Col {...props}>
      {props.children}
    </Col>
  </ThemeProvider>
)
