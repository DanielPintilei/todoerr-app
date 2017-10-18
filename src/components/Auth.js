import React from 'react'
import PropTypes from 'prop-types'

const Auth = ({ authViewToggled, onToggleAuth, onSubmit }) => (
  <div className='auth'>
    <h1 className='auth-header'>{authViewToggled ? 'Log In' : 'Sign Up'}</h1>
    <form action='' className='auth-form' onSubmit={ev => onSubmit(ev)}>
      <input
        type='email'
        className='auth-input'
        placeholder='Email'
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        required
      />
      <input
        type='password'
        className='auth-input'
        placeholder='Password'
        required
      />
      <div className='auth-footer'>
        <button
          className={`auth-button ${authViewToggled ? 'aux' : ''}`}
          onClick={ev => authViewToggled && onToggleAuth(ev)}
        >
          {'Sign Up'}
        </button>
        <button
          className={`auth-button ${!authViewToggled ? 'aux' : ''}`}
          onClick={ev => !authViewToggled && onToggleAuth(ev)}
        >
          {'Log In'}
        </button>
      </div>
    </form>
  </div>
)

Auth.propTypes = {
  authViewToggled: PropTypes.bool.isRequired,
  onToggleAuth: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default Auth
