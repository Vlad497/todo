import React from 'react'
import { Link } from 'react-router-dom'

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            repeatPassword: ''
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

    checkInputDataValidity = () => {
        this.props.checkLoginValidity(this.state.login)
        this.props.checkPasswordValidity(this.state.password, this.state.repeatPassword)
        this.props.handleSignUp(this.state.login, this.state.password, this.state.repeatPassword) 
    }
    render() {
        const { checkingErrorPassword,checkingErrorLogin } = this.props

        return (
            <form className='registration' id='reg'>
                <h3>Sign up</h3>
                <div>
                    <input type='text' name='login' autoComplete='off' placeholder='Enter login' spellCheck='false' onChange={this.handleChangeLogin} />
                </div>
                <div>
                    {checkingErrorLogin === 2 ? <span>Check the correctness of the login</span> :
                    checkingErrorLogin === 3 ?<span>The user with this login is already registered</span>:     
                        ''}
                </div>
                <div>
                    <input type='password' name='password' autoComplete='off' placeholder='Enter password' spellCheck='false' onChange={this.handleChangePassword} />
                </div>
                <div>
                    <input type='password' name='repeatPassword' autoComplete='off' placeholder='Repeat password' spellCheck='false' onChange={this.handleChangeRepeatPassword} />
                </div>
                <div>
                    {checkingErrorPassword === 2 ? <span>The password must be more than 6 characters, include upper and lower case characters, and must include at least one digit.</span> :
                        checkingErrorPassword === 3 ? <span>Passwords must match</span> :
                        ''}
                </div>
                <div>
                    <Link to='/'><button onClick={this.checkInputDataValidity}>Sign Up</button></Link>
                </div>
            </form>
        )
    }
}

export default Registration