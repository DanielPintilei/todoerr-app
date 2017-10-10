const checkboxAll = (state = false, action) =>
  action.type === 'TOGGLE_CHECKBOX_ALL' ? action.checked : state

export default checkboxAll
