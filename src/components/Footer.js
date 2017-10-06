import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <footer className='footer'>
    <span className='counter'>12 items left</span>
    <div className='filters'>
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </div>
    <button className='button clear'>Clear Completed</button>
  </footer>
)

export default Footer
