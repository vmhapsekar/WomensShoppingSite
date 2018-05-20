import styled from 'styled-components'
import {Grid} from 'react-styled-flexboxgrid'

export const StyledGrid = styled(Grid)`
  max-width: 1164px;
  margin: 0 auto;
`

export const theme = {
  flexboxgrid: {
    gutterWidth: 1.875, // rem  (30px)
    outerMargin: 0.9375, // rem (15px)
    container: {
      sm: 46, // rem - 736px
      md: 61, // rem - 976px
      lg: 75 // rem - 1200px
    },
    breakpoints: {
      xs: 0, // em
      sm: 30, // em - 480px
      md: 48, // em - 768px
      lg: 60 // em  - 960px
    }
  }
}
