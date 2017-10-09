import React from 'react'
import PropTypes from 'prop-types'
import FilterLink from '../containers/FilterLink'

const Footer = ({ itemsLeft = 0, onClearCompleted }) => (
  <footer className='footer'>
    <span className='counter'>
      {itemsLeft
        ? itemsLeft === 1 ? `1 item left` : `${itemsLeft} items left`
        : ''}
    </span>
    <div className='filters'>
      <FilterLink filter='SHOW_ALL'>All</FilterLink>
      <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
      <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
    </div>
    <button className='button clear' onClick={onClearCompleted}>
      Clear Completed
    </button>
  </footer>
)

Footer.propTypes = {
  itemsLeft: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
}

export default Footer
