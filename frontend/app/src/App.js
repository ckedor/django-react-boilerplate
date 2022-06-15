import { Component } from 'react'
import { Outlet } from "react-router-dom";
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

    return (
      <div>
        <NavbarComponent 
          handleLogout={handleLogout}
          loggedIn={false} />
        <Outlet />
      </div>
    )
  }
}

export default App;
