import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

let Counter = ({ itemsLeft }) => (
  <span className='counter'>
    {itemsLeft
      ? itemsLeft === 1 ? `1 item left` : `${itemsLeft} items left`
      : ''}
  </span>
)

const mapStateToProps = (state, ownProps) => {
  // return {
  //   active: ownProps.filter === state.visibilityFilter,
  // }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  // return {
  //   onClick: () => {
  //     dispatch(setVisibilityFilter(ownProps.filter))
  //   },
  // }
}

Counter.propTypes = {
  itemsLeft: PropTypes.number.isRequired,
}

Counter = connect(mapStateToProps, mapDispatchToProps)(Counter)

export default Counter
