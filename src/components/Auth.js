import React from 'react'
import { Link } from 'react-router-dom';


class Auth extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            login: '',
            passsword: ''
        }
    }
    handleChangeLogin = (e) => {
        this.state.login = e.target.value
    }

    handleChangePassword = (e) => {
        this.state.password = e.target.value
    }


    render() {
        const { checkLoginPasswordAuth,checkingErrorPassword } = this.props
            
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
                {checkingErrorPassword === 5 ? <span>Invalid username or password.</span> :
                        ''}
                </div>
                <div>
                <Link to='/'><button onClick={() => checkLoginPasswordAuth(this.state.login, this.state.password)}>Sign In</button></Link>
                </div>
            </form>
        )
    }
}
export default Auth