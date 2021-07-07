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