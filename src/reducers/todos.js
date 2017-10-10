// import axios from 'axios'

// axios.defaults.baseURL = process.env.REACT_APP_API

// export const fetchTodos = () => () => {
//   axios.get('/todos/react').then(res => {
//     console.log(res.data)
//   })
// }

const todos = (state = [], action) => {
  switch (action.type) {
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
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    case 'DELETE_COMPLETED':
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export default todos
