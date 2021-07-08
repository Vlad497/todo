import React from 'react';
import {
  Redirect
} from "react-router-dom";

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: ''
    }
  }

  handleChange = (e) => {
    this.state.inputData = e.target.value
  }
  handleKeyPress(e, userId) {
    if (e.key === "Enter") {
      this.props.addTodoItem(this.state.inputData, userId)
    }
  }

  render() {
    const { addTodoItem, userId, users, changeUser } = this.props
    if (users.changeUser)
      return <Redirect to='todo234' />
    return (
      <div >
        <input type="text" onChange={this.handleChange} onKeyDown={(e) => this.handleKeyPress(e, userId)} />
        <button onClick={() => { addTodoItem(this.state.inputData, userId) }}>Add</button>
        <button onClick={() => { changeUser(users.changeUser) }}>Add2</button>
      </div>
    );
  }
}


export default Input