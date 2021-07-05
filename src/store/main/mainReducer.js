const mainReducer = (state = [], action) => {
  if (action.type === 'ADD_INPUT') {
    let obj = {}
    let inputValue = action.value
    let id = Math.floor(Math.random() * 1000)
    obj = { inputValue, id, userId: action.userId }
    return state = [...state, obj]
  }
  if (action.type === 'REMOVE_INPUT') {
    return state.filter(el => el.id !== action.id)
  }
  return state
}
export default mainReducer