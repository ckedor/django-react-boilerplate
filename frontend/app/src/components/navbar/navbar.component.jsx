import Navbar from 'react-bootstrap/Navbar'
import logo from '../../logo.svg';
import './navbar.css'
import { Component } from 'react'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';

class NavbarComponent extends Component {

    handleLogout = (event) => {
        localStorage.removeItem('token')
        this.props.handleLogout()
    }

    render(){

        const { handleLogout } = this;
        const loggedIn  = this.props.loggedIn;
        return (
            <Navbar bg="dark py-2" variant="dark">
                <Navbar.Brand href="#home" className='navbar-brand'>
                    <img alt="" src={logo}width="30" height="30" className="d-inline-block align-top"/>{' '}
                Boilerplate
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Nav
                        className="my-2 my-lg-0 navbar-logout"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    {loggedIn &&
                    <Button variant="link" className="navbar-logout-button" style={{ boxShadow: 'none'}} onClick={handleLogout}>Logout</Button>
                    }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavbarComponent