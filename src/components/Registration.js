import React from 'react'

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            passsword: '',
            repeatPasssword: ''
        }
    }
    handleChangeLogin = (e) => {
        this.state.login = e.target.value
    }

    handleChangePassword = (e) => {
        this.state.password = e.target.value
    }

    handleChangeRepeatPassword = (e) => {
        this.state.repeatPassword = e.target.value
    }
    render() {
         const { handleSignUp,isAuth } = this.props
        
        return (
            <div className='registration'>
                <h3>Sign up</h3>

                <div>
                    <input type='text' name='login' autoComplete='off' spellCheck='false' onChange={this.handleChangeLogin} />
                </div>
                <div>
                    <input type='password' name='password' autoComplete='off' spellCheck='false' onChange={this.handleChangePassword} />
                </div>
                <div>
                    <input type='password' name='repeatPassword' autoComplete='off' placeholder='Repeat password' spellCheck='false' onChange={this.handleChangeRepeatPassword} />
                </div>
                <div>
                    <button onClick={() => handleSignUp(this.state.login, this.state.password, this.state.repeatPassword)}>Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Registration