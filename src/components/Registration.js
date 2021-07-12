import React from 'react'
import { Link } from 'react-router-dom'

class Registration extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            repeatPassword: '',
            errors: {
                login: false,
                password: false,
                repeatPassword: false
            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    checkLoginValidity = (login) => {
        let isValid = true
        const whitespace = /\s/g;
        if (whitespace.test(login)) {
            this.setState({
                errors: {
                    login: true
                }
            })
            isValid = false
        } else {
            this.setState({
                errors: {
                    login: false
                }
            })
        }
        return isValid
    }
    checkPasswordValidity = (password, repeatPassword) => {
        let isValid = true
        const letter = /[a-z]/;
        const upper = /[A-Z]/;
        const number = /[0-9]/;
        if (password.length < 6 || !letter.test(password) || !number.test(password) || !upper.test(password)) {
            this.setState({
                errors: {
                    password: true
                }
            })
            isValid = false
            return isValid
        } else if (password !== repeatPassword) {
            this.setState({
                errors: {
                    repeatPassword: true
                }
            })
            isValid = false
        }
        return isValid
    }

    checkInputDataValidity = () => {
        const isValidLogin = this.checkLoginValidity(this.state.login)
        const isValidPasswords = this.checkPasswordValidity(this.state.password, this.state.repeatPassword)
        if (isValidLogin && isValidPasswords) { this.props.handleSignUp(this.state.login, this.state.password, this.state.repeatPassword) }
    }
    render() {

        return (
            <form className='registration' id='reg'>
                <h3>Sign up</h3>
                <div>
                    <input type='text' name='login' autoComplete='off' placeholder='Enter login' value={this.state.login} spellCheck='false' onChange={this.handleChange} />
                </div>
                <div>
                    {this.state.errors.login ? <span>Check the correctness of the login</span> :
                        !!this.props.singUpError ? <span>{this.props.singUpError}</span> :
                            ''}
                </div>
                <div>
                    <input type='password' name='password' autoComplete='off' value={this.state.password} placeholder='Enter password' spellCheck='false' onChange={this.handleChange} />
                </div>
                <div>
                    <input type='password' name='repeatPassword' autoComplete='off' value={this.state.repeatPassword} placeholder='Repeat password' spellCheck='false' onChange={this.handleChange} />
                </div>
                <div>
                    {this.state.errors.password ? <span>The password must be more than 6 characters, include upper and lower case characters, and must include at least one digit.</span> :
                        this.state.errors.repeatPassword ? <span>Passwords must match</span> :
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