import React, { Component } from 'react'
import './App.css'
import Footer from './Footer'
import axios from 'axios'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

axios.defaults.baseURL = process.env.REACT_APP_API

class App extends Component {
  // state = {
  //   todos: [],
  // }
  // componentDidMount () {
  //   axios.get('/todos/react').then(res => {
  //     this.setState({ todos: res.data })
  //   })
  // }
  render () {
    // const { todos } = this.state
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
    return (
      <div className='App'>
        <SvgSymbols />
        <div className='book'>
          <AddTodo />
          <section className='main'>
            <VisibleTodoList />
            <Footer />
          </section>
        </div>
      </div>
    )
  }
}

export default App
