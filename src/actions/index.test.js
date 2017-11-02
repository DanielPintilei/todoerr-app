import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Some todo text'
    const expectedAction = {
      type: 'ADD_TODO',
      text,
    }
    expect(actions.addTodoLocal(text)).toEqual(expectedAction)
  })
})
