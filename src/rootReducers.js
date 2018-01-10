import { combineReducers } from 'redux'
import auth from './auth/reducers'
import todos, { todosHasErrored, todosIsLoading } from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'
import checkboxAll from './reducers/checkboxAll'

const rootReducers = combineReducers({
  auth,
  todos,
  todosHasErrored,
  todosIsLoading,
  visibilityFilter,
  checkboxAll,
})

export default rootReducers
