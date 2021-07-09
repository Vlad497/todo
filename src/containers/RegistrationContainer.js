import {connect} from 'react-redux'
import Registration from '../components/Registration'
import { bindActionCreators } from 'redux';
import {addLoginPasswordRegistration,checkPasswordValidity} from '../store/users/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        handleSignUp: bindActionCreators(addLoginPasswordRegistration, dispatch),
        checkPasswordValidity:bindActionCreators(checkPasswordValidity,dispatch)
    }
  }
  const mapStateToProps = (state) => {
    return {
      isAuth: state.users.isAuth,
      checkPassword:state.users.checkPassword
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Registration);