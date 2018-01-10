import { combineEpics } from 'redux-observable'
import { signup, login, logout } from './auth/epics'

const rootEpics = combineEpics(signup, login, logout)

export default rootEpics
