import React from 'react';

class TodoList extends React.Component {
  render() {

    const { todo, removeTodoItem,changeTodoItem } = this.props
    return (
      <div>
        {
          todo.map(el =>
            <div key={el.id} className='containerTodo'>
              <li className={el.complete ? "completed todoText" : "todoText"} onClick={() => { removeTodoItem(el.id) }}
                >
                {el.inputValue}
              </li> <input className='form-check-input mt-0' type='checkbox' onChange={()=>{changeTodoItem(el.id)}}/>
            </div>)
        }
      </div>
    );
  }
}

export default TodoList