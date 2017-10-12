import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let Counter = ({ counterUncompleted }) => (
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

Counter = connect(mapStateToProps)(Counter)

export default Counter
