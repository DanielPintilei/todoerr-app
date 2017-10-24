import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Counter = ({ counterUncompleted }) => (
  <span className='counter'>
    {counterUncompleted === 1
      ? `1 item left`
      : `${counterUncompleted} items left`}
  </span>
)

const mapStateToProps = state => ({
  counterUncompleted: state.todos.filter(todo => !todo.completed).length,
})

Counter.propTypes = {
  counterUncompleted: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(Counter)
