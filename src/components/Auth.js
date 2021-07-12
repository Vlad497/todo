import React from 'react'
import { Link } from 'react-router-dom';


class Auth extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            password: '',
            error: false
        }
    }
    handleChangeLogin = (e) => {
        this.setState({
            login:e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    checkInputDataValidity = () => {
        this.props.checkLoginPasswordAuth(this.state.login, this.state.password)
        if (!this.props.isAuth) {
            this.setState({
                error: true
            })
        }
    }

    render() {

        return (
            <form className='auth'>
                <h3>Sign In</h3>
                <div>
                    <input type='text' name='login' autoComplete='off' placeholder='Enter login' spellCheck='false' onChange={this.handleChangeLogin} />
                </div>
                <div>
                    <input type='password' name='password' autoComplete='off' placeholder='Enter password' spellCheck='false' onChange={this.handleChangePassword} />
                </div>
                <div>
                    {this.state.error ? <span>Invalid username or password.</span> :
                        ''}
                </div>
                <div>
                    <Link to='/'><button onClick={this.checkInputDataValidity}>Sign In</button></Link>
                </div>
            </form>
        )
    }
}
export default Auth