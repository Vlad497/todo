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
    console.log(change)
    return {
        type:'CHANGE_USER',
        changeUser:change
    }
}
export const checkPasswordValidity=(login,password,repeatPassword)=>{
    return {
        type:'CHECK_PASSWORD',
        valueLogin: login,
        valuePassword: password,
        valueRepeatPassword:repeatPassword
    }
}