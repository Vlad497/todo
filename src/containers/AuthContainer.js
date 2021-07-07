import {connect} from 'react-redux'
import Auth from '../components/Auth'
import { bindActionCreators } from 'redux';
import {checkLoginPasswordAuth} from '../store/users/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        checkLoginPasswordAuth: bindActionCreators(checkLoginPasswordAuth, dispatch)
    }
  }
  const mapStateToProps = (state) => {
    return {
      isAuth: state.users.isAuth
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Auth);