import { connect } from 'react-redux'
import { toggleCheckboxAll, deleteCompleted } from '../actions'
import DeleteLink from '../components/DeleteLink'

const mapStateToProps = state => ({
  todosToDelete: state.todos.filter(todo => todo.completed).map(todo => todo.id),
})

const mapDispatchToProps = dispatch => ({
  onClick: todosToDelete => {
    dispatch(deleteCompleted(todosToDelete))
    dispatch(toggleCheckboxAll(false))
  },
})

const DeleteLinkContainer = connect(mapStateToProps, mapDispatchToProps)(
  DeleteLink
)

export default DeleteLinkContainer
