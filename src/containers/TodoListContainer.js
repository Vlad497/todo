import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { bindActionCreators } from 'redux';
import { removeTodoItem,changeTodoItem } from '../store/todoListForm/actions'

const mapStateToProps = (state) => {
    return {
        todo: state.todoList.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeTodoItem: bindActionCreators(removeTodoItem, dispatch),
        changeTodoItem: bindActionCreators(changeTodoItem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);