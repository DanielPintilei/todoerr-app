import React from 'react'
import Counter from '../containers/Counter'
import FilterButton from '../containers/FilterButton'
import ClearButton from '../containers/ClearButton'

const Footer = () => (
  <footer className='footer'>
    {<Counter />}
    <div className='filters'>
      <FilterButton filter='SHOW_ALL'>All</FilterButton>
      <FilterButton filter='SHOW_ACTIVE'>Active</FilterButton>
      <FilterButton filter='SHOW_COMPLETED'>Completed</FilterButton>
    </div>
    <ClearButton />
  </footer>
)

export default Footer
