import { connect } from 'react-redux'
import { toggleCheckboxAll, deleteCompleted } from '../actions'
import DeleteLink from '../components/DeleteLink'

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(deleteCompleted())
      dispatch(toggleCheckboxAll(false))
    },
  }
}

const FilterLink = connect(null, mapDispatchToProps)(DeleteLink)

export default FilterLink
