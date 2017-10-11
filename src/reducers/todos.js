export const todosHasErrored = (state = false, action) => {
  switch (action.type) {
    case 'TODOS_HAS_ERRORED':
      return action.todosHasErrored
    default:
      return state
  }
}

export const todosIsLoading = (state = false, action) => {
  switch (action.type) {
    case 'TODOS_IS_LOADING':
      return action.todosIsLoading
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'TODOS_FETCH_DATA_SUCCESS':
      return action.todos
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ]
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'TOGGLE_ALL':
      return state.map(todo => {
        return { ...todo, completed: action.checked }
      })
    case 'EDIT_TODO':
      return state.map(
        todo => (todo.id === action.id ? { ...todo, text: action.text } : todo)
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'DELETE_COMPLETED':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
