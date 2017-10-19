import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './App.css'
import Auth from '../components/Auth'
import Footer from '../components/Footer'
import AddTodo from './AddTodo'
import VisibleTodoList from './VisibleTodoList'
import { loginUser, logoutUser } from '../actions'

class App extends Component {
  state = {
    authViewToggled: false,
  }
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
  }
  toggleAuth = ev => {
    ev.preventDefault()
    this.setState({ authViewToggled: !this.state.authViewToggled })
  }
  onSubmit = (ev, email, password) => {
    ev.preventDefault()
    this.props.dispatch(
      loginUser({
        email,
        password,
      })
    )
  }
  render () {
    const SvgSymbols = () => (
      <svg style={{ display: 'none' }}>
        <symbol
          id='iconCheck'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon-svg'
        >
          <circle cx='12' cy='12' r='10' />
        </symbol>
        <symbol
          id='iconCheckOn'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon-svg on'
        >
          <path d='M22 11.07V12a10 10 0 1 1-5.93-9.14' />
          <polyline points='23 3 12 14 9 11' />
        </symbol>
        <symbol
          id='iconEdit'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon-svg'
        >
          <polygon points='14 2 18 6 7 17 3 17 3 13 14 2' />
          <line x1='3' y1='22' x2='21' y2='22' />
        </symbol>
        <symbol
          id='iconDelete'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='icon-svg'
        >
          <polyline points='3 6 5 6 21 6' />
          <path d='M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2' />
          <line x1='10' y1='11' x2='10' y2='17' />
          <line x1='14' y1='11' x2='14' y2='17' />
        </symbol>
      </svg>
    )
    const SvgLogout = () => (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='mediumpurple'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M10 22H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h5' />
        <polyline points='17 16 21 12 17 8' />
        <line x1='21' y1='12' x2='9' y2='12' />
      </svg>
    )
    const { dispatch, isAuthenticated, errorMessage } = this.props
    const { authViewToggled } = this.state
    return (
      <div className='App'>
        <SvgSymbols />
        {isAuthenticated ? (
          [
            <div className='book' key='book'>
              <AddTodo />
              <section className='main'>
                <VisibleTodoList />
                <Footer />
              </section>
            </div>,
            <button
              className='logout'
              key='logout'
              onClick={() => dispatch(logoutUser())}
            >
              <SvgLogout />
            </button>,
          ]
        ) : (
          <Auth
            authViewToggled={authViewToggled}
            onToggleAuth={this.toggleAuth}
            onSubmit={this.onSubmit}
            errorMessage={errorMessage}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  errorMessage: state.auth.errorMessage,
})

export default connect(mapStateToProps)(App)
