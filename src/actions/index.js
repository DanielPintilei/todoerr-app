import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API

const http = (method, url, params) => {
  const body = method === 'get' ? 'params' : 'data'
  const config = {
    method,
    url,
    [body]: params || {},
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }
  return axios.request(config)
}

const todosHasErrored = bool => ({
  type: 'TODOS_HAS_ERRORED',
  todosHasErrored: bool,
})
const todosIsLoading = bool => ({
  type: 'TODOS_IS_LOADING',
  todosIsLoading: bool,
})
const todosFetchDataSuccess = todos => ({
  type: 'TODOS_FETCH_DATA_SUCCESS',
  todos,
})
export const todosFetchData = url => dispatch => {
  dispatch(todosIsLoading(true))
  http('get', url)
    .then(res => {
      dispatch(todosIsLoading(false))
      return res.data
    })
    .then(todos =>
      dispatch(
        todosFetchDataSuccess(
          todos.map(({ _id: id, text, completed }) => ({
            id,
            text,
            completed,
          }))
        )
      )
    )
    .catch(() => {
      dispatch(todosHasErrored(true))
    })
}

export const addTodoLocal = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text,
})
export const addTodo = text => dispatch => {
  http('post', '/todo', { text, completed: false }).then(res =>
    dispatch(addTodoLocal(text, res.data))
  )
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

export const toggleTodoLocal = id => ({
  type: 'TOGGLE_TODO',
  id,
})
export const toggleTodo = (id, completed) => dispatch => {
  http('post', '/todo', { id, completed: !completed }).then(res =>
    dispatch(toggleTodoLocal(id))
  )
}

export const toggleCheckboxAll = checked => ({
  type: 'TOGGLE_CHECKBOX_ALL',
  checked,
})

export const toggleAllLocal = checked => ({
  type: 'TOGGLE_ALL',
  checked,
})
export const toggleAll = checked => dispatch => {
  http('post', '/todo-all', { completed: checked }).then(res =>
    dispatch(toggleAllLocal(checked))
  )
}

export const editTodoLocal = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
})
export const editTodo = (id, text) => dispatch => {
  http('post', '/todo', { id, text }).then(dispatch(editTodoLocal(id, text)))
}

export const deleteTodoLocal = id => ({
  type: 'DELETE_TODO',
  id,
})
export const deleteTodo = id => dispatch => {
  http('delete', '/todo', { id }).then(dispatch(deleteTodoLocal(id)))
}

export const deleteCompletedLocal = () => ({
  type: 'DELETE_COMPLETED',
})
export const deleteCompleted = ids => dispatch => {
  http('delete', '/todos', { ids }).then(dispatch(deleteCompletedLocal()))
}
