import React from 'react'

import {ThemeProvider} from 'styled-components'
import {Row, Col} from 'react-styled-flexboxgrid'

import {theme, StyledGrid} from './styles'

// Defining Grid to make it responsive
export const Grid = (props) => (
  <ThemeProvider theme={theme}>
    <StyledGrid {...props}>
      {props.children}
    </StyledGrid>
  </ThemeProvider>
)

// Defining Row of the Grid
export const GRow = (props) => (
  <ThemeProvider theme={theme}>
    <Row {...props}>
      {props.children}
    </Row>
  </ThemeProvider>
)

// Defining Column of the Grid
export const GCol = (props) => (
  <ThemeProvider theme={theme}>
    <Col {...props}>
      {props.children}
    </Col>
  </ThemeProvider>
)
