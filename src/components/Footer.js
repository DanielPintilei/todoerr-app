import React from 'react'
import Counter from '../containers/Counter'
import FilterLink from '../containers/FilterLink'
import DeleteLinkContainer from '../containers/DeleteLinkContainer'

const Footer = () => (
  <footer className='footer'>
    {<Counter />}
    <div className='filters'>
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </div>
    <DeleteLinkContainer />
  </footer>
)

export default Footer
