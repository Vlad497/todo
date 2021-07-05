import React from 'react'
import { connect } from 'react-redux'
import Registration from '../components/Registration'
import { bindActionCreators } from 'redux';
import { addLoginPasswordRegistration } from '../store/actions'
import { setLoginRegistration, setPasswordRegistration, setreapetPasswordRegistration } from '../store/registration/actions'

class RegistrationContainer extends React.Component {
    render() {
        const { add, handleChangeLogin, handleChangePassword, handleChangeRepeatPassword, login, password, repeatPassword } = this.props
        return (
            <Registration handleChangeLogin={handleChangeLogin} add={add} handleChangePassword={handleChangePassword} handleChangeRepeatPassword={handleChangeRepeatPassword} login={login} password={password} repeatPassword={repeatPassword} />
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangeLogin: bindActionCreators(setLoginRegistration, dispatch),
        handleChangePassword: bindActionCreators(setPasswordRegistration, dispatch),
        handleChangeRepeatPassword: bindActionCreators(setreapetPasswordRegistration, dispatch),
        add: bindActionCreators(addLoginPasswordRegistration, dispatch)
    }
}
const mapStateToProps = (state) => {
    const todo = state.todo.data.filter(({ userId }) => state.auth.currentUser.id === userId)
    return {
        login: state.registrationLogin,
        password: state.registrationPassword,
        repeatPassword: state.registrationRepeatPassword,
        todo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);