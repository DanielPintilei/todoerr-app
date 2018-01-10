import {
  SIGNUP_REQUEST,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './constants'

export const requestSignup = creds => ({
  type: SIGNUP_REQUEST,
  payload: creds,
})
export const errorSignup = message => ({
  type: SIGNUP_FAILURE,
  payload: message,
})

export const requestLogin = creds => ({
  type: LOGIN_REQUEST,
  payload: creds,
})
export const receiveLogin = () => ({
  type: LOGIN_SUCCESS,
})
export const errorLogin = message => ({
  type: LOGIN_FAILURE,
  payload: message,
})

export const requestLogout = () => ({
  type: LOGOUT_REQUEST,
})
export const receiveLogout = () => ({
  type: LOGOUT_SUCCESS,
})
