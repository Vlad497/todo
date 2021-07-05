export const addLoginPasswordRegistration = (login, password,repeatPassword) => {
    return {
        type: 'ADD_LOGIN_PASSWORD_REGISTRATION',
        valueLogin: login,
        valuePassword: password,
        valueRepeatPassword:repeatPassword
    }
}

export const addLoginPasswordAuth = (login, password) => {
    return {
        type: 'ADD_LOGIN_PASSWORD_AUTH',
        valueLogin: login,
        valuePassword: password
    }
}