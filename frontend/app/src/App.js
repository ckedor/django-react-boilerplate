import { Component } from 'react'
import LoginComponent from './components/login/login.component'
import NavbarComponent from './components/navbar/navbar.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      token: ''
    }

    this.handleToken = this.handleToken.bind(this)
  }

  handleToken(token){
    this.setState({token})
  }

  render(){
    var token = localStorage.getItem("token")
    const { handleToken } = this;

    if (!token){
      return (
        <div>
          <NavbarComponent />
          <LoginComponent 
            handleToken={handleToken}
          />
        </div>
      )
    } else {
      return (
        <div>
          <NavbarComponent />
          <p>Página Principal</p>
        </div>
      )
    }
  }
}

export default App;
