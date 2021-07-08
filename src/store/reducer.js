import { combineReducers } from 'redux'
import { usersReducer} from './users/reducers'
import { todoListReducer } from './todoListForm/reducers'

const reducer = combineReducers({
  users: usersReducer,
  todoList: todoListReducer
})
export default reducer