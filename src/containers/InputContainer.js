import React from 'react'
import { connect } from 'react-redux'
import Input from '../components/Input'
import { bindActionCreators } from 'redux';
import { addTodoItem } from '../store/todoListForm/actions'

const mapDispatchToProps = (dispatch) => {
  return {
    addTodoItem: bindActionCreators(addTodoItem, dispatch)
  }
}
const mapStateToProps = (state) => {/* 
   const todo=state.todoListReducer.filter(todo=>state.usersReducer.map(user=>user.id).filter(id=>id===todo.id))  */
  return { 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)