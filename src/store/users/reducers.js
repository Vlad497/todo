const initialState = {
  isAuth: false,
  currentUser: null,
  users: [],
  changeUser: false
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'ADD_LOGIN_PASSWORD' && (action.valuePassword === action.valueRepeatPassword)) {
    let inputLogin = action.valueLogin
    let inputPassword = action.valuePassword
    let id = Math.floor(Math.random() * 1000)
    let obj = { inputLogin, inputPassword, id }
    console.log(obj)
    return {
      ...state,
      isAuth: true,
      currentUser: obj,
      users: [...state.users, obj]
    }
  }
  if (action.type === 'CHECK_LOGIN_PASSWORD') {
    const users = state.users.filter(el => {
      if (el.inputLogin === action.valueLogin && el.inputPassword === action.valuePassword) {
        return true
      }
      return false
    })
    const user=users[0]
    console.log(user)
    if (typeof(user)!=='undefined') {
      return {
        ...state,
        isAuth: true,
        currentUser: user
      }
    }
    return {
      ...state,
      isAuth: false
    }
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      changeUser: !action.changeUser,
      isAuth:false
    }
  }
  return state
}