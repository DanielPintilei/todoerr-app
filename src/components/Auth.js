import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Panel from '../components/Panel'

const StyledAuth = styled.div`
  max-width: 100%;
  position: relative;
  .auth-header {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'Knewave', cursive;
    font-size: 32px;
    font-weight: normal;
    text-align: center;
    color: mediumpurple;
  }
  .auth-input {
    width: 100%;
    min-width: 0;
    height: 38px;
    margin-bottom: 20px;
    padding-left: 10px;
    color: plum;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid plum;
    outline: none;
  }
  .auth-input::placeholder {
    color: thistle;
  }
  .auth-footer {
    display: flex;
    width: 100%;
    margin-top: 20px;
  }
  .auth-button {
    width: 100%;
    height: 40px;
    color: plum;
    border: 1px solid plum;
  }
  .auth-button:first-child {
    margin-right: 20px;
  }
  .auth-button:hover {
    color: floralwhite;
    background-color: plum;
  }
  .auth-button.aux {
    width: 100%;
    color: lavender;
    border: 1px solid lavender;
  }
  .auth-button.aux:hover {
    color: floralwhite;
    background-color: lavender;
  }
`

const AuthForm = Panel.withComponent('form').extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 100%;
  margin-bottom: 10px;
  padding: 40px 30px;
`

const Error = styled.p`
  position: absolute;
  bottom: -100px;
  left: 0;
  padding: 20px;
  color: floralwhite;
  background-color: mediumpurple;
  box-shadow: 10px 10px 300px 30px hotpink;
  transform: skew(12deg, 3deg);
`

const Auth = ({ authViewToggled, onToggleAuth, onSubmit, errorMessage }) => {
  let emailInput
  let passwordInput
  return (
    <StyledAuth>
      <h1 className='auth-header'>{authViewToggled ? 'Log In' : 'Sign Up'}</h1>
      <AuthForm
        onSubmit={ev =>
          onSubmit(ev, {
            email: emailInput.value,
            password: passwordInput.value,
          })}
      >
        <input
          type='email'
          className='auth-input'
          placeholder='Email'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          required
          ref={node => {
            emailInput = node
          }}
        />
        <input
          type='password'
          className='auth-input'
          placeholder='Password'
          required
          minLength={!authViewToggled && '6'}
          ref={node => {
            passwordInput = node
          }}
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
      </AuthForm>
      {errorMessage && <Error>{errorMessage}</Error>}
    </StyledAuth>
  )
}
Auth.propTypes = {
  authViewToggled: PropTypes.bool.isRequired,
  onToggleAuth: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Auth
