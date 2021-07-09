const initialState = {
  isAuth: false,
  currentUser: null,
  users: [],
  changeUser: false,
  checkPassword: 1,
  checkUser: ''
}

export const usersReducer = (state = initialState, action) => {
  if (action.type === 'ADD_LOGIN_PASSWORD' && (state.checkPassword === 1)) {
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
        checkPassword:1
      }
    }
    return {
      ...state,
      isAuth: false,
      checkPassword:5
    }
  }
  if (action.type === 'CHANGE_USER') {
    return {
      ...state,
      changeUser: !action.changeUser,
      isAuth: false
    }
  }
  if (action.type === 'CHECK_PASSWORD') {
    const letter = /[a-z]/;
    const upper = /[A-Z]/;
    const number = /[0-9]/;
    const pass = action.valuePassword
    const repeatPass = action.valueRepeatPassword
    let checkPassword = 1

    if (pass.length < 6 || !letter.test(pass) || !number.test(pass) || !upper.test(pass)) {
      checkPassword = 2
    } else {
      if (pass !== repeatPass) {
        checkPassword = 3
      } else {
        const users = state.users.filter(el => {
          if (el.inputLogin === action.valueLogin) {
            return true
          }
          return false
        })

        const user = users[0]
        
        typeof (user) !== 'undefined' ? checkPassword = 4 : checkPassword = 1
      }
    }
  return {
    ...state,
    checkPassword: checkPassword
  }
}
return state
}