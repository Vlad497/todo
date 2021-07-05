import React from 'react';
import { connect } from "react-redux";
import { removeInput } from '../store/main/mainActions';
import { bindActionCreators } from "redux"


class Main extends React.Component {

  render() {

    const { todo, remove } = this.props

    return (
      <div id='main'>
        {
          todo.map(el =>
            <li onClick={() => { remove(el.id) }}
              key={el.id}>
              {el.inputValue}
            </li>)
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.main
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    remove: bindActionCreators(removeInput, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);