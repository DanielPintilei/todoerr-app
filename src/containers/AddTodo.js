import React from 'react'
import PropTypes from 'prop-types'
import Panel from '../components/Panel'
import { connect } from 'react-redux'
import { addTodo, toggleCheckboxAll, toggleAll } from '../actions'

const Header = Panel.withComponent('header').extend`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 4px 8px;
  .toggle-all {
    flex-shrink: 0;
  }
  .input {
    flex-grow: 1;
    height: 40px;
    min-width: 0;
    padding-left: 20px;
    font-size: 14px;
    background-color: transparent;
    border: none;
    outline: none;
  }
  .icon-add {
    stroke: mediumspringgreen;
  }
`

const AddTodo = ({ dispatch, checkboxAll }) => {
  let input
  let checkbox
  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        dispatch(toggleCheckboxAll(false))
        input.value = ''
      }}
    >
      <Header>
        <label className='label-checkbox'>
          <input
            type='checkbox'
            className='checkbox toggle-all'
            checked={checkboxAll}
            readOnly
            ref={node => {
              checkbox = node
            }}
          />
          <svg
            onClick={() => {
              dispatch(toggleAll(!checkbox.checked))
              dispatch(toggleCheckboxAll(!checkboxAll))
            }}
            className='icon-checkbox'
            width='24'
            height='24'
          >
            <use className='off' xlinkHref='#iconCheck' />
            <use className='on' xlinkHref='#iconCheckOn' />
          </svg>
        </label>
        <input
          type='text'
          className='input'
          placeholder="Let's do this"
          ref={node => {
            input = node
          }}
        />
        <button type='submit'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='icon-add'
          >
            <line x1='12' y1='5' x2='12' y2='19' />
            <line x1='5' y1='12' x2='19' y2='12' />
          </svg>
        </button>
      </Header>
    </form>
  )
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
  checkboxAll: PropTypes.bool.isRequired,
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AddTodo)
