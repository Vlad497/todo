import AuthContainer from './containers/AuthContainer'
import RegistrationContainer from './containers/RegistrationContainer'
import React from 'react'
import InputContainer from './containers/InputContainer'
import TodoListContainer from './containers/TodoListContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*  class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <InputContainer />
         <div className='vertical-line'></div>
        <TodoListContainer />
      </div>
    )
  }
}  */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <div className='container'>
                <RegistrationContainer />
                <div className='vertical-line'></div>
                <AuthContainer />
              </div>
            </Route>
             <Route path="/todo">
              <InputContainer />
              <TodoListContainer />
            </Route> 
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App