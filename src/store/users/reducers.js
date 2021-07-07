const initialState = {
  isAuth: false,
  currentUser: null,
  users: []
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'ADD_LOGIN_PASSWORD' && (action.valuePassword === action.valueRepeatPassword)) {
      let obj = {}
      let inputLogin = action.valueLogin
      let inputPassword = action.valuePassword
      let id = Math.floor(Math.random() * 1000)
      let todoList={}
      obj = { inputLogin, inputPassword, id, todoList }
      console.log(obj)
      return {
        ...state,
        isAuth: true,
        currentUser: obj,
        users:[...state.users, obj]
      }
  }
  if (action.type === 'CHECK_LOGIN_PASSWORD') {
      let user = state.users.filter(el => {
          if (el.inputLogin === action.valueLogin && el.inputPassword === action.valuePassword) {
              return true
          }
          return false
      })
      console.log(state) 
      return  state
  }
  return state
}