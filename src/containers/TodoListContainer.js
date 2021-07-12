import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { bindActionCreators } from 'redux';
import { removeTodoItem,changeTodoItem } from '../store/todoListForm/actions'

const mapStateToProps = (state) => {
    const todo=state.todoList.data.filter(todo=>state.users.currentUser.id===todo.userId)
    return {
        todo: todo
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeTodoItem: bindActionCreators(removeTodoItem, dispatch),
        changeTodoItem: bindActionCreators(changeTodoItem, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);