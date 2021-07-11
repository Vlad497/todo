import {connect} from 'react-redux'
import Registration from '../components/Registration'
import { bindActionCreators } from 'redux';
import {addLoginPasswordRegistration,checkPasswordValidity,checkLoginValidity} from '../store/users/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        handleSignUp: bindActionCreators(addLoginPasswordRegistration, dispatch),
        checkPasswordValidity:bindActionCreators(checkPasswordValidity,dispatch),
        checkLoginValidity:bindActionCreators(checkLoginValidity,dispatch)
    }
  }
  const mapStateToProps = (state) => {
    return {
      checkingErrorPassword:state.users.checkingErrorPassword,
      checkingErrorLogin:state.users.checkingErrorLogin
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Registration);