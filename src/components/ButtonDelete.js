import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from './Button'

const StyledButton = styled(Button)`
  color: mediumslateblue;
  border: 1px solid mediumslateblue;
  &:hover {
    color: honeydew;
    background-color: mediumslateblue;
  }
`

const ButtonDelete = ({ onClick, todosToDelete }) => (
  <StyledButton onClick={() => onClick(todosToDelete)}>
    Clear Completed
  </StyledButton>
)
ButtonDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
  todosToDelete: PropTypes.array.isRequired,
}

export default ButtonDelete
