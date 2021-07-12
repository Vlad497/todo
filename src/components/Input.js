import React from 'react';
import { Link } from "react-router-dom";

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputData: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      inputData: e.target.value
    })
  }
  handleKeyPress(e, userId) {
    if (e.key === "Enter") {
      if (document.getElementById('inputTodo').value !== '') {
        this.props.addTodoItem(this.state.inputData, userId)
      }
      this.setState({
        inputData: ''
      })
    }
  }
  checkEmptyInput = () => {
    if (document.getElementById('inputTodo').value !== '') {
      this.props.addTodoItem(this.state.inputData, this.props.userId)
    }
    this.setState({
      inputData: ''
    })
  }
  render() {
    const { userId, changeUser } = this.props

    return (
      <div className='containerInput input-group mb-3'>
        <input className='form-control' id='inputTodo' type="text" value={this.state.inputData} onChange={this.handleChange} placeholder='Enter the task text' onKeyDown={(e) => this.handleKeyPress(e, userId)} />
        <button className='btn btn-outline-secondary' onClick={this.checkEmptyInput}>Add</button>
        <Link to='/'><button className='btn btn-secondary btn-sm' onClick={() => { changeUser() }}>Change user</button></Link>
      </div>
    );



  }
}


export default Input