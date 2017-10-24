import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledCounter = styled.span`
  width: 100px;
  padding-bottom: 2px;
  font-size: 13px;
  color: gray;
`

const Counter = ({ counterUncompleted }) => (
  <StyledCounter>
    {counterUncompleted === 1
      ? `1 item left`
      : `${counterUncompleted} items left`}
  </StyledCounter>
)

const mapStateToProps = state => ({
  counterUncompleted: state.todos.filter(todo => !todo.completed).length,
})

Counter.propTypes = {
  counterUncompleted: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(Counter)
