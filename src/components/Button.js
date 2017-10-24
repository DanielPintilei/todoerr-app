import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ active, children, onClick }) =>
  active ? (
    <button className='button active'>{children}</button>
  ) : (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  )

Button.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
