import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setInput } from '../store/input/inputActions'
import { addInput } from '../store/main/mainActions'

class Input extends React.Component {

  render() {

    const { add, handleChange, input } = this.props

    return (
      <div id='input' style={{visibility='hidden'}}>
        <input type="text" onChange={(e) => { handleChange(e.target.value) }} />
        <button onClick={() => { add(input) }}>Add</button>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: bindActionCreators(setInput, dispatch),
    add: bindActionCreators(addInput, dispatch)
  }
}
const mapStateToProps = (state) => {
  return {
    input: state.input
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);