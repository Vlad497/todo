import { connect } from 'react-redux'
import Registration from '../components/Registration'
import { bindActionCreators } from 'redux';
import { addLoginPasswordRegistration } from '../store/users/actions'


const mapDispatchToProps = (dispatch) => {
  return {
    handleSignUp: bindActionCreators(addLoginPasswordRegistration, dispatch)
  }
}
const mapStateToProps = (state) => {
  return {
    singUpError: state.users.singUpError
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);