import React from 'react'
import { render } from 'react-dom'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import { injectGlobal } from 'styled-components'
import { rgba } from 'polished'

injectGlobal`
  * {
  box-sizing: border-box;
  }
  :root {
    position: relative;
  }
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: slateblue;
    background-image:
      radial-gradient(${rgba('lightskyblue', 0.1)} 15%, transparent 16%),
      radial-gradient(${rgba('lightskyblue', 0.05)} 15%, transparent 16%);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    @media (max-width: 900px) {
      padding-top: 100px;
    }
  }
  ::selection {
    color: #fff;
    background-color: slateblue;
  }
  button,
  label {
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    &:active {
      transform: scale(0.9);
    }
  }
  .label-checkbox {
    height: 24px;
    margin-right: 5px;
  }
  .icon-svg {
    stroke: plum;
    &.on {
      stroke: mediumspringgreen;
    }
  }
  input[type='checkbox'] {
    &,
    &:checked + .icon-checkbox .off,
    &:not(:checked) + .icon-checkbox .on {
      display: none;
    }
  }
`

if (process.env.NODE_ENV !== 'production') {
  const { whyDidYouUpdate } = require('why-did-you-update')
  whyDidYouUpdate(React)
}

render(<App />, document.getElementById('root'))

registerServiceWorker()

if (module.hot) module.hot.accept()
