import React from 'react'
import PropTypes from 'prop-types'

import {Wrapper} from './styles'

const Section = ({id, children, variant, highlight}) => {
  const wrapperProps = {id, variant, highlight}
  return (
    <Wrapper data-test-id={id} {...wrapperProps}>{children}</Wrapper>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.arrayOf(PropTypes.element)]),
  variant: PropTypes.oneOf(['internal', 'external']),
  highlight: PropTypes.oneOf(['ocean-blue', 'seagrass'])
}

export default Section
