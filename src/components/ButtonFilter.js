import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const ButtonFilter = ({ active, children, onClick }) =>
  active ? (
    <Button className='active'>{children}</Button>
  ) : (
    <Button onClick={onClick}>{children}</Button>
  )
ButtonFilter.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default ButtonFilter
