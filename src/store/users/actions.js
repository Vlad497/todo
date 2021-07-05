export const setLogin = (login) => {
    return {
        type: 'SET_LOGIN',
        value: login
    }
}
export const setPassword = (password) => {
    return {
        type: 'SET_PASSWORD',
        value: password
    }
}
export const setreapetPassword = (password) => {
    return {
        type: 'SET_REPEAT_PASSWORD',
        value: password
    }
}