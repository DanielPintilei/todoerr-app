import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API

export const todosHasErrored = bool => {
  return {
    type: 'TODOS_HAS_ERRORED',
    hasErrored: bool,
  }
}
export const todosIsLoading = bool => {
  return {
    type: 'TODOS_IS_LOADING',
    isLoading: bool,
  }
}
export const todosFetchDataSuccess = todos => {
  return {
    type: 'TODOS_FETCH_DATA_SUCCESS',
    todos,
  }
}
export const todosFetchData = url => {
  return dispatch => {
    dispatch(todosIsLoading(true))
    axios(url)
      .then(res => {
        if (res.statusText !== 'OK') throw Error(res.statusText)
        dispatch(todosIsLoading(false))
        return res
      })
      .then(res => res.data)
      .then(todos =>
        dispatch(
          todosFetchDataSuccess(
            todos.map(({ _id: id, text, completed }) => {
              return { id, text, completed }
            })
          )
        )
      )
      .catch(() => dispatch(todosHasErrored(true)))
  }
}

export const addTodoLocal = (text, id) => {
  return {
    type: 'ADD_TODO',
    id,
    text,
  }
}
export const addTodo = text => {
  return dispatch => {
    axios
      .post('/todo', { text, completed: false })
      .then(res => dispatch(addTodoLocal(text, res.data)))
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const toggleTodoLocal = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}
export const toggleTodo = (id, completed) => {
  return dispatch => {
    axios
      .post('/todo', { id, completed: !completed })
      .then(res => dispatch(toggleTodoLocal(id)))
  }
}

export const toggleCheckboxAll = checked => {
  return {
    type: 'TOGGLE_CHECKBOX_ALL',
    checked,
  }
}

export const toggleAllLocal = checked => {
  return {
    type: 'TOGGLE_ALL',
    checked,
  }
}
export const toggleAll = checked => {
  return dispatch => {
    axios
      .post('/todo-all', { completed: checked })
      .then(res => dispatch(toggleAllLocal(checked)))
  }
}

export const editTodoLocal = (id, text) => {
  return {
    type: 'EDIT_TODO',
    id,
    text,
  }
}
export const editTodo = (id, text) => {
  return dispatch => {
    axios.post('/todo', { id, text }).then(dispatch(editTodoLocal(id, text)))
  }
}

export const deleteTodoLocal = id => {
  return {
    type: 'DELETE_TODO',
    id,
  }
}
export const deleteTodo = id => {
  return dispatch => {
    axios.delete('/todo', { data: { id } }).then(dispatch(deleteTodoLocal(id)))
  }
}

export const deleteCompletedLocal = () => {
  return {
    type: 'DELETE_COMPLETED',
  }
}
export const deleteCompleted = ids => {
  return dispatch => {
    axios
      .delete('/todos', { data: { ids } })
      .then(dispatch(deleteCompletedLocal()))
  }
}
