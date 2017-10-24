import { connect } from 'react-redux'
import { toggleCheckboxAll, deleteCompleted } from '../actions'
import ButtonDelete from '../components/ButtonDelete'

const mapStateToProps = state => ({
  todosToDelete: state.todos.filter(todo => todo.completed).map(todo => todo.id),
})

const mapDispatchToProps = dispatch => ({
  onClick: todosToDelete => {
    dispatch(deleteCompleted(todosToDelete))
    dispatch(toggleCheckboxAll(false))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDelete)
