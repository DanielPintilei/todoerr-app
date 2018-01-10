import { Observable } from 'rxjs'
import { SIGNUP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from './constants'
import { errorSignup, receiveLogin, errorLogin, receiveLogout } from './actions'

const baseURL = process.env.REACT_APP_API

export const signup = action$ =>
  action$.ofType(SIGNUP_REQUEST).mergeMap(action =>
    Observable.ajax({
      method: 'POST',
      url: baseURL + '/register',
      body: action.payload,
    })
      .map(({ response }) => {
        localStorage.setItem('token', response.token)
        return receiveLogin()
      })
      .catch(err =>
        Observable.of(errorSignup(err.response ? err.response.message : '🌠'))
      )
  )

export const login = action$ =>
  action$.ofType(LOGIN_REQUEST).mergeMap(action =>
    Observable.ajax({
      method: 'POST',
      url: baseURL + '/login',
      body: action.payload,
    })
      .map(({ response }) => {
        localStorage.setItem('token', response.token)
        return receiveLogin()
      })
      .catch(err =>
        Observable.of(errorLogin(err.response ? err.response.message : '🌠'))
      )
  )

export const logout = action$ =>
  action$.ofType(LOGOUT_REQUEST).map(() => {
    localStorage.removeItem('token')
    return receiveLogout()
  })
