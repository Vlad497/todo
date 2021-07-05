export const loginReducer = (state = '', action) => {
    if (action.type === 'SET_LOGIN') {
        return action.value
    }
    return state
}

export const passwordReducer = (state = '', action) => {
    if (action.type === 'SET_PASSWORD') {
        return action.value
    }
    return state
}

export const repeatPasswordReducer=(state='',action)=>{
    if(action.type==='SET_REPEAT_PASSWORD'){
      return action.value
    }
    return state
}