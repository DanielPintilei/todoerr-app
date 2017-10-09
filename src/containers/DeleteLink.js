import { connect } from 'react-redux'
import { deleteCompleted } from '../actions'
import DeleteLink from '../components/DeleteLink'

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(deleteCompleted())
    },
  }
}

const FilterLink = connect(null, mapDispatchToProps)(DeleteLink)

export default FilterLink
