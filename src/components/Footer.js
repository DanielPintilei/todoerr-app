import React from 'react'
import Counter from '../containers/Counter'
import Filter from '../containers/Filter'
import Clear from '../containers/Clear'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px 8px;
  .filters {
    display: flex;
  }
`

const Footer = () => (
  <StyledFooter>
    {<Counter />}
    <div className='filters'>
      <Filter filter='SHOW_ALL'>All</Filter>
      <Filter filter='SHOW_ACTIVE'>Active</Filter>
      <Filter filter='SHOW_COMPLETED'>Completed</Filter>
    </div>
    <Clear />
  </StyledFooter>
)

export default Footer
