import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
// import checkboxAll from './checkboxAll'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  // checkboxAll,
})

export default todoApp
