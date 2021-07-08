import AuthContainer from './containers/AuthContainer'
import RegistrationContainer from './containers/RegistrationContainer'
import React from 'react'
import InputContainer from './containers/InputContainer'
import TodoListContainer from './containers/TodoListContainer'
import { connect } from 'react-redux'
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/main">
          {this.props.isAuth ? <div><InputContainer/><TodoListContainer/></div> :<div className='container'>
            <RegistrationContainer />
            <div className='vertical-line'></div>
            <AuthContainer />
          </div>}
        </Route>
      </BrowserRouter>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.users.isAuth
  }
}
export default connect(mapStateToProps)(App)