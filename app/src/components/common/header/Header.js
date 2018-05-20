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
      <Grid fluid>
        <GRow>
          <GCol xs={12} sm={12} md={10} lg={10}>
            <Title>{title}</Title>
          </GCol>
          <GCol xs={12} sm={12} md={2} lg={2}>
            <h2>
              <Filter id='size-filter' className={'dropdown-style'} onChange={setFilter}>
                { selectOptions }
              </Filter>
            </h2>
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
