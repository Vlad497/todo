const initialState = {
  data: []
}

export const todoListReducer = (state = initialState, action) => {
  if (action.type === 'ADD_TODO_ITEM') {
    let obj = {}
    let inputValue = action.value
    let id = Math.floor(Math.random() * 1000)
    let complete = false
    obj = { inputValue, id, complete, userId: inputValue.id }
    return {
      ...state,
      data: [...state.data, obj]
    }
  }
  if (action.type === 'REMOVE_TODO_ITEM') {
    const data = state.data.filter(el => el.id !== action.id)
    return {
      ...state,
      data
    }
  }
  if (action.type === 'CHANGE_TODO_ITEM') {
    const data = state.data.map(el => el.id === action.id ? { ...el, complete: !el.complete } : { ...el })
    return {
      ...state,
      data
    }
  }
  return state
}