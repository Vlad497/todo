import React from 'react'
import {connect} from 'react-redux'
import Auth from '../components/Auth'
import { bindActionCreators } from 'redux';
import {addLoginPasswordAuth} from '../store/actions'
import {setLoginAuth,setPasswordAuth} from '../store/auth/actions'

class AuthContainer extends React.Component{
    render(){
        const {add,handleChangeLogin,handleChangePassword,login,password}=this.props
        return(
            <Auth handleChangeLogin={handleChangeLogin} add={add} handleChangePassword={handleChangePassword} login={login} password={password}/>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLogin: bindActionCreators(setLoginAuth, dispatch),
        handleChangePassword: bindActionCreators(setPasswordAuth, dispatch),
        add: bindActionCreators(addLoginPasswordAuth, dispatch)
    }
  }
  const mapStateToProps = (state) => {
    return {
        login: state.authLogin,
        password: state.authPassword
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);