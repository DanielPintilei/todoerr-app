import { combineReducers } from 'redux'
import todos, { todosHasErrored, todosIsLoading } from './todos'
import visibilityFilter from './visibilityFilter'
import checkboxAll from './checkboxAll'

const todoApp = combineReducers({
  todos,
  todosHasErrored,
  todosIsLoading,
  visibilityFilter,
  checkboxAll,
})

export default todoApp
