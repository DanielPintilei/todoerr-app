import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import ButtonFilter from '../components/ButtonFilter'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

const Filter = connect(mapStateToProps, mapDispatchToProps)(ButtonFilter)

export default Filter
