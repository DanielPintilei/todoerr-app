import todos from './todos'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(todos(undefined, {})).toEqual([])
  })
  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        id: 1,
        text: 'Some todo text',
      })
    ).toEqual([
      {
        id: 1,
        text: 'Some todo text',
        completed: false,
      },
    ])
    expect(
      todos(
        [
          {
            id: 1,
            text: 'Some todo text',
            completed: false,
          },
        ],
        {
          type: 'ADD_TODO',
          id: 2,
          text: 'More todo text',
        }
      )
    ).toEqual([
      {
        id: 1,
        text: 'Some todo text',
        completed: false,
      },
      {
        id: 2,
        text: 'More todo text',
        completed: false,
      },
    ])
  })
})
