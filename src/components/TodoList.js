import React from 'react';

class TodoList extends React.Component {
  render() {

    const { todo, removeTodoItem,changeTodoItem } = this.props

    return (
      <div>
        {
          todo.map(el =>
            <div key={el.id}>
              <li className={el.complete ? "completed todoText" : "todoText"} onClick={() => { removeTodoItem(el.id) }}
                >
                {el.inputValue}
              </li> <input type='checkbox' onChange={()=>{changeTodoItem(el.id)}}/>
            </div>)
        }
      </div>
    );
  }
}

export default TodoList