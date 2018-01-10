import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './constants'

const auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('token'),
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      }
    case SIGNUP_FAILURE:
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.payload,
      }
    case LOGOUT_SUCCESS:
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
