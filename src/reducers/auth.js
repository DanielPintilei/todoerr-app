// const auth = (state = {}, action) => {
//   switch (action.type) {
//     // saves the token into the state
//     case 'AUTH_SET_TOKEN':
//       // console.log(state)
//       return {
//         ...state,
//         token: action.token,
//       }
//     // discards the current token (logout)
//     case 'AUTH_DISCARD_TOKEN':
//       return {}
//     // saves the current user
//     case 'AUTH_SET_USER':
//       return {
//         ...state,
//         user: action.user,
//       }
//     default:
//       return state
//   }
// }
const auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
  },
  action
) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
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
