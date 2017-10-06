import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API

class App extends Component {
  state = {
    todos: [],
  }
  componentDidMount () {
    const getTodos = () =>
      axios.get('/todos/react').then(res => {
        console.log(res.data)
        return { todos: res.data }
      })
    this.setState(getTodos())
  }
  render () {
    return (
      <div className='App'>
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
        </svg>
        <div className='book'>
          <header className='header'>
            <label className='label-checkbox'>
              <input type='checkbox' className='checkbox toggle-all' />
              <svg className='icon icon-checkbox' width='24' height='24'>
                <use className='off' xlinkHref='#iconCheck' />
                <use className='on' xlinkHref='#iconCheckOn' />
              </svg>
            </label>
            <input type='text' className='input' placeholder="Let's do this" />
          </header>
          <section className='main'>
            <ul className='list'>
              <li className='item'>
                <label className='label-checkbox'>
                  <input type='checkbox' className='checkbox toggle' />
                  <svg className='icon icon-checkbox' width='24' height='24'>
                    <use className='off' xlinkHref='#iconCheck' />
                    <use className='on' xlinkHref='#iconCheckOn' />
                  </svg>
                </label>
                <p className='item-text'>
                  fsgdbs dfgb gfd fgdbgf fsgdbs dfgb gfd fg dbgff sgdbsdfg
                  bgfdfgd bgffsg dbsd fgbgfdfg dbg f fs gd bsdfg bgfdfgdbgf
                </p>
                <button className='edit'>edit</button>
                <button className='delete'>delete</button>
              </li>
            </ul>
            <footer className='footer'>
              <span className='counter'>12 items left</span>
              <div className='filters'>
                <button className='filter'>all</button>
                <button className='filter'>active</button>
                <button className='filter'>completed</button>
              </div>
              <button className='clear'>clear completed</button>
            </footer>
          </section>
        </div>
      </div>
    )
  }
}

export default App
