if (action.type === 'ADD_LOGIN_PASSWORD_REGISTRATION' && (action.valuePassword === action.valueRepeatPassword)) {
        export const reducer = (state = [], action) => {
        let obj = {}
        let inputLogin = action.valueLogin
        let inputPassword = action.valuePassword
        let id = Math.floor(Math.random() * 1000)
        obj = { inputLogin, inputPassword, id }
        console.log(obj)
        /* document.getElementById('registration').hidden=true
        document.getElementById('auth').hidden=true
        document.getElementsByClassName('mainBlock').innerHTML='<h3>kjhjhju</h3>'
         */
        return state = [...state, obj]
    }
    if (action.type === 'ADD_LOGIN_PASSWORD_AUTH') {
        let bool = false
        state.filter(el => {
            if (el.inputLogin === action.valueLogin && el.inputPassword === action.valuePassword) {
                bool = true
                return true
            }
            return false
        })
        if (bool) console.log('1')
        return state
    }
    return state
}