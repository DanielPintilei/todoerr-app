const auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token'),
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      }
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

export default auth
