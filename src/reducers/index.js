import { combineReducers } from 'redux'
import auth from './auth'
import todos, { todosHasErrored, todosIsLoading } from './todos'
import visibilityFilter from './visibilityFilter'
import checkboxAll from './checkboxAll'

const todoApp = combineReducers({
  auth,
  todos,
  todosHasErrored,
  todosIsLoading,
  visibilityFilter,
  checkboxAll,
})

export default todoApp
