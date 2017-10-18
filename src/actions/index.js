import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API

const requestLogin = creds => ({
  type: 'LOGIN_REQUEST',
  isFetching: true,
  isAuthenticated: false,
  creds,
})
const receiveLogin = user => ({
  type: 'LOGIN_SUCCESS',
  isFetching: false,
  isAuthenticated: true,
  id_token: user.id_token,
})
const loginError = message => ({
  type: 'LOGIN_FAILURE',
  isFetching: false,
  isAuthenticated: false,
  message,
})
export const loginUser = creds => dispatch => {
  // const config = {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  //   body: `username=${creds.username}&password=${creds.password}`,
  // }
  // We dispatch requestLogin to kickoff the call to the API
  dispatch(requestLogin(creds))
  // return fetch('http://localhost:3300/sessions/create', config)
  //   .then(response => response.json().then(user => ({ user, response })))
  //   .then(({ user, response }) => {
  //     if (!response.ok) {
  //       // If there was a problem, we want to
  //       // dispatch the error condition
  //       dispatch(loginError(user.message))
  //       return Promise.reject(user)
  //     } else {
  //       // If login was successful, set the token in local storage
  //       localStorage.setItem('id_token', user.id_token)
  //       localStorage.setItem('id_token', user.access_token)
  //       // Dispatch the success action
  //       dispatch(receiveLogin(user))
  //     }
  //   })
  //   .catch(err => console.log('Error: ', err))
  return (
    axios
      .post('/login', {
        email: 'daniel@assist.ro',
        password: '123',
      })
      .then(res => {
        // console.log(res)
        if (res.status < 200 && res.status > 304) {
          dispatch(loginError(res.data.user.message))
          throw Error(res.status)
        }
        dispatch(todosIsLoading(false))
        return res
      })
      // .then(({ data: { user } }) => {
      .then(res => {
        console.log(res)
        localStorage.setItem('id_token', res.data.user.id_token)
        localStorage.setItem('id_token', res.data.user.access_token)
        dispatch(receiveLogin(res.data.user))
      })
      .catch(() => dispatch(todosHasErrored(true)))
  )
}

const requestLogout = () => ({
  type: 'LOGOUT_REQUEST',
  isFetching: true,
  isAuthenticated: true,
})
const receiveLogout = () => ({
  type: 'LOGOUT_SUCCESS',
  isFetching: false,
  isAuthenticated: false,
})
export const logoutUser = () => dispatch => {
  dispatch(requestLogout())
  localStorage.removeItem('id_token')
  localStorage.removeItem('access_token')
  dispatch(receiveLogout())
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
  axios(url)
    .then(res => {
      if (res.status < 200 && res.status > 304) throw Error(res.status)
      dispatch(todosIsLoading(false))
      return res
    })
    .then(res => res.data)
    .then(todos =>
      dispatch(
        todosFetchDataSuccess(
          todos.map(({ _id: id, text, completed }) => ({ id, text, completed }))
        )
      )
    )
    .catch(() => dispatch(todosHasErrored(true)))
}

const addTodoLocal = (text, id) => ({
  type: 'ADD_TODO',
  id,
  text,
})
export const addTodo = text => dispatch => {
  axios
    .post('/todo', { text, completed: false })
    .then(res => dispatch(addTodoLocal(text, res.data)))
}

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
})

const toggleTodoLocal = id => ({
  type: 'TOGGLE_TODO',
  id,
})
export const toggleTodo = (id, completed) => dispatch => {
  axios
    .post('/todo', { id, completed: !completed })
    .then(res => dispatch(toggleTodoLocal(id)))
}

export const toggleCheckboxAll = checked => ({
  type: 'TOGGLE_CHECKBOX_ALL',
  checked,
})

const toggleAllLocal = checked => ({
  type: 'TOGGLE_ALL',
  checked,
})
export const toggleAll = checked => dispatch => {
  axios
    .post('/todo-all', { completed: checked })
    .then(res => dispatch(toggleAllLocal(checked)))
}

const editTodoLocal = (id, text) => ({
  type: 'EDIT_TODO',
  id,
  text,
})
export const editTodo = (id, text) => dispatch => {
  axios.post('/todo', { id, text }).then(dispatch(editTodoLocal(id, text)))
}

const deleteTodoLocal = id => ({
  type: 'DELETE_TODO',
  id,
})
export const deleteTodo = id => dispatch => {
  axios.delete('/todo', { data: { id } }).then(dispatch(deleteTodoLocal(id)))
}

const deleteCompletedLocal = () => ({
  type: 'DELETE_COMPLETED',
})
export const deleteCompleted = ids => dispatch => {
  axios
    .delete('/todos', { data: { ids } })
    .then(dispatch(deleteCompletedLocal()))
}
