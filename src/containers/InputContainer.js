import React from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input'
import { bindActionCreators } from 'redux';
import { addTodoItem } from '../store/todoListForm/actions'
import { changeUser } from '../store/users/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: bindActionCreators(addTodoItem, dispatch),
    changeUser: bindActionCreators(changeUser, dispatch)
  }
}
const mapStateToProps = (state) => {
    return {
      isAuth: state.users.isAuth,
      users: state.users,
      userId: state.users.currentUser.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)