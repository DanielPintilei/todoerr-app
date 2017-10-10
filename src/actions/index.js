let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
  }
}

// export const countUncompleted = number => {
//   return {
//     type: 'COUNT_UNCOMPLETED',
//     number,
//   }
// }

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id,
  }
}

export const toggleCheckboxAll = checked => {
  return {
    type: 'TOGGLE_CHECKBOX_ALL',
    checked,
  }
}

export const toggleAll = checked => {
  return {
    type: 'TOGGLE_ALL',
    checked,
  }
}

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id,
  }
}

export const deleteCompleted = () => {
  return {
    type: 'DELETE_COMPLETED',
  }
}
