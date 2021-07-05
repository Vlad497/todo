import AuthContainer from './containers/AuthContainer'
import RegistrationContainer from './containers/RegistrationContainer'
import React from 'react'
import Input from './components/Input'
import Main from './components/Main'


class App extends React.Component {
  render() {
    return (
      <div className='mainBlock'>
        <RegistrationContainer />
        <AuthContainer />
        <Input/>
      </div>
    )
  }
}

export default App