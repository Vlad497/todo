const initialState = {
  isAuth: false,
  currentUser: null,
  users: [],
  checkingUser: false,
  checkingErrorPassword: 1,
  changingUser: false,
  checkingErrorLogin: 1
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'ADD_LOGIN_PASSWORD' && (state.checkingErrorPassword === 1) && (state.checkingErrorLogin === 1)) {
    console.log(state.checkingErrorLogin)
    let inputLogin = action.valueLogin
    let inputPassword = action.valuePassword
    let id = Math.floor(Math.random() * 1000)
    let obj = { inputLogin, inputPassword, id }
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
    const user = users[0]
    console.log(user)
    if (typeof (user) !== 'undefined') {
      return {
        ...state,
        isAuth: true,
        currentUser: user,
        checkingErrorPassword: 1,
        checkingErrorLogin: 1
      }
    }
    return {
      ...state,
      isAuth: false,
      checkingErrorPassword: 5
    }
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      checkingUser: !action.changingUser,
      isAuth: false
    }
  }
  if (action.type === 'CHECK_PASSWORD') {
    const letter = /[a-z]/;
    const upper = /[A-Z]/;
    const number = /[0-9]/;
    const password = action.valuePassword
    const repeatPass = action.valueRepeatPassword
    let checkingErrorPassword = 1
    if (password.length < 6 || !letter.test(password) || !number.test(password) || !upper.test(password)) {
      checkingErrorPassword = 2
    } else {
      if (password !== repeatPass) {
        checkingErrorPassword = 3
      }
    }
    return {
      ...state,
      checkingErrorPassword: checkingErrorPassword
    }
  }
  if (action.type === 'CHECK_LOGIN') {
    const whitespace = /\s/g;
    const login = action.valueLogin
    let checkingErrorLogin = 1
    if (whitespace.test(login)) { checkingErrorLogin = 2 } else {
      const users = state.users.filter(el => {
        if (el.inputLogin === action.valueLogin) {
          return true
        }
        return false
      })
      console.log(users)
      const user = users[0]

      typeof (user) !== 'undefined' ? checkingErrorLogin = 3 : checkingErrorLogin = 1
    }

    return {
      ...state,
      checkingErrorLogin: checkingErrorLogin
    }
  }
  return state
}