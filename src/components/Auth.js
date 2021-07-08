import React from 'react'
import InputContainer from '../containers/InputContainer'
import TodoListContainer from '../containers/TodoListContainer'
import { Link } from 'react-router-dom';

import {
    Redirect
} from "react-router-dom";

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
        const { checkLoginPasswordAuth, isAuth } = this.props
            
        return (
            <div className='auth'>
                <h3>Sign In</h3>
                <div>
                    <input type='text' name='login' autoComplete='off' spellCheck='false' onChange={this.handleChangeLogin} />
                </div>
                <div>
                    <input type='passsword' name='passsword' autoComplete='off' spellCheck='false' onChange={this.handleChangePassword} />
                </div>
                <div>
                <Link to='todo'><button onClick={() => checkLoginPasswordAuth(this.state.login, this.state.password)}>Sign In</button></Link>
                </div>
            </div>
        )
    }
}
export default Auth