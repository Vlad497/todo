import React from 'react'

class Auth extends React.Component{
    render(){
        const {add,handleChangeLogin,handleChangePassword,login,password}=this.props
        return(
            <div id='auth'>
                <h3>Sign In</h3>
                    <div>
                        <input className='form-control' type='text' name='login' autoComplete='off' placeholder='Login' spellCheck='false' onChange={(e) => { handleChangeLogin(e.target.value) }}/>
                    </div>
                    <div>
                        <input className='form-control' type='passsword' name='passsword' autoComplete='off' placeholder='Password' spellCheck='false' onChange={(e) => { handleChangePassword(e.target.value) }}/>
                    </div>
                    <div>
                        <button onClick={()=>add(login,password)} className="btn btn-light">Sign In</button>
                    </div>
                
            </div>
        )
    }
}
export default Auth