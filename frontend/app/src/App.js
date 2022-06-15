import { Component } from 'react'
import LoginComponent from './components/login/login.component'
import NavbarComponent from './components/navbar/navbar.component';

class App extends Component {

  constructor(){
    super();

    this.state = {
      token: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin(token){
    if (token){
      this.setState({token})
    }
  }

  handleLogout(){
    this.setState({token:undefined})
  }

  render(){
    var token = localStorage.getItem("token")
    const { handleLogin, handleLogout} = this;

    if (!token){
      return (
        <div>
          <NavbarComponent 
            handleLogout={handleLogout}
            loggedIn={false}
          />
          <LoginComponent 
            handleLogin={handleLogin}
          />
        </div>
      )
    } else {
      return (
        <div>
          <NavbarComponent 
            handleLogout={handleLogout}
            loggedIn={true}
          />
          <p>Página Principal</p>
        </div>
      )
    }
  }
}

export default App;
