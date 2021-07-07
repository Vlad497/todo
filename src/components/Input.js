import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)

    this.state={
      inputData:''
    }
  }

  handleChange=(e)=>{
    this.state.inputData=e.target.value
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.addTodoItem(this.state.inputData)
    }
  }
  render() {
    const { addTodoItem} = this.props

    return (
      <div >
        <input  type="text" onChange={this.handleChange} onKeyDown={(e)=>this.handleKeyPress(e)} />
        <button  onClick={() => { addTodoItem(this.state.inputData) }}>Add</button>
      </div>
    );
  }
}


export default Input