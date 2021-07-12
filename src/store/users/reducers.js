const initialState = {
  isAuth: false,
  currentUser: null,
  singUpError: '',
  users: []
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'REGISTRATION') {
    let inputLogin = action.valueLogin
    let inputPassword = action.valuePassword
    let id = Math.floor(Math.random() * 1000)
    let obj = { inputLogin, inputPassword, id }
    const user = state.users.find(el => el.inputLogin === action.valueLogin && el.inputPassword === action.valuePassword)
    if (!!user) {
      return {
        ...state,
        singUpError:'The user with this login is already registered'
      }
    }
    else {
      return {
        ...state,
        isAuth: true,
        currentUser: obj,
        users: [...state.users, obj],
        singUpError:''
      }
    }
  }
  if (action.type === 'LOGIN') {
    const user = state.users.find(el => el.inputLogin === action.valueLogin && el.inputPassword === action.valuePassword)
    return {
      ...state,
      isAuth: !!user,
      currentUser: user,
      singUpError:'' 
    }
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      currentUser: null,
      isAuth: false
    }
  }
  return state
}