import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) =>
  active ? (
    <button className='button filter active'>{children}</button>
  ) : (
    <button onClick={onClick} className='button filter'>
      {children}
    </button>
  )

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Link
