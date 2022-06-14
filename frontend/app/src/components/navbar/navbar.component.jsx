import Navbar from 'react-bootstrap/Navbar'
import logo from '../../logo.svg';
import { Component } from 'react'

class NavbarComponent extends Component {

    render(){
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Boilerplate
                </Navbar.Brand>
            </Navbar>
        )
    }
}

export default NavbarComponent