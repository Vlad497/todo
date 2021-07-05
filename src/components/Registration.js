import React from 'react'

class Registration extends React.Component{
    render(){
        const {add,handleChangeLogin,handleChangePassword,handleChangeRepeatPassword,login,password,repeatPassword}=this.props
        return(
            <div id='registration'>
                <h3>Sign up</h3>
                    <div>
                        <input type='text' name='login' autoComplete='off' placeholder='Login' spellCheck='false' onChange={(e) => { handleChangeLogin(e.target.value) }}/>
                    </div>
                    <div>
                        <input type='passsword' name='passsword' autoComplete='off' placeholder='Password' spellCheck='false' onChange={(e) => { handleChangePassword(e.target.value) }}/>
                    </div>
                    <div>
                        <input type='passsword' name='passsword' autoComplete='off' placeholder='Repeat password' spellCheck='false' onChange={(e) => { handleChangeRepeatPassword(e.target.value) }}/>
                    </div>
                    <div>
                        <button onClick={()=>add(login,password,repeatPassword)}>Sign Up</button>
                    </div>
                
            </div>
        )
    }
}

export default Registration