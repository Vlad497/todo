export const addLoginPasswordRegistration = (login, password,repeatPassword) => {
    return {
        type: 'ADD_LOGIN_PASSWORD',
        valueLogin: login,
        valuePassword: password,
        valueRepeatPassword:repeatPassword
    }
}

export const checkLoginPasswordAuth = (login, password) => {
    return {
        type: 'CHECK_LOGIN_PASSWORD',
        valueLogin: login,
        valuePassword: password
    }
}
export const changeUser=(change)=>{
    return {
        type:'CHANGE_USER',
        changingUser:change
    }
}
export const checkPasswordValidity=(password,repeatPassword)=>{
    return {
        type:'CHECK_PASSWORD',
        valuePassword: password,
        valueRepeatPassword:repeatPassword
    }
}
export const checkLoginValidity=(login)=>{
    return {
        type:'CHECK_LOGIN',
        valueLogin: login
    }
}