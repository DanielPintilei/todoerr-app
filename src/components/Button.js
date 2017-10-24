import styled from 'styled-components'

const Button = styled.button`
  margin-left: 7px;
  padding: 2px 7px;
  color: deepskyblue;
  background-color: transparent;
  border: 1px solid deepskyblue;
  border-radius: 2px;
  &.active,
  &:hover {
    color: honeydew;
    background-color: deepskyblue;
  }
`

export default Button
