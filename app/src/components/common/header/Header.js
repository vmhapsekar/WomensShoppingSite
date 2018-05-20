import React from 'react'
import PropTypes from 'prop-types'
import {map} from 'lodash'
import {Grid, GRow, GCol} from '../../common/grid/Grid'
import {Wrapper, Title, Filter} from './styles'

const Header = ({title, filter, setFilter}) => {
  const selectOptions = map(filter, (option, index) => {
    return <option key={index} value={option.id}>{option.label}</option>
  })
  return (
    <Wrapper>
      <Grid>
        <GRow>
          <GCol xs={12} sm={12} md={4} lg={4}>
            <Title>{title}</Title>
          </GCol>
          <GCol xs={12} sm={12} md={4} lg={4}>
            <Filter id='size-filter' className={'dropdown-style'} onChange={setFilter}>
              { selectOptions }
            </Filter>
          </GCol>
        </GRow>
      </Grid>
    </Wrapper>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  filter: PropTypes.array.isRequired,
  setFilter: PropTypes.func
}

export default Header
