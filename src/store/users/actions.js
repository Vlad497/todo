export const addLoginPasswordRegistration = (login, password,repeatPassword) => {
    return {
        type: 'REGISTRATION',
        valueLogin: login,
        valuePassword: password,
        valueRepeatPassword:repeatPassword
    }
}

export const checkLoginPasswordAuth = (login, password) => {
    return {
        type: 'LOGIN',
        valueLogin: login,
        valuePassword: password
    }
}
export const changeUser=()=>{
    return {
        type:'CHANGE_USER'
    }
}
