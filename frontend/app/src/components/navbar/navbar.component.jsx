import Navbar from 'react-bootstrap/Navbar'
import logo from '../../logo.svg';
import './navbar.scss'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button';
import { MdLogout, MdPerson } from "react-icons/md/";
import { Fragment, useContext} from 'react';
import AuthContext from '../../context/auth.context';

const NavbarComponent = () => {

    const {user, logout} = useContext(AuthContext)

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
                {user &&
                <Fragment>
                    <Navbar.Text className="navbar-user">
                        <MdPerson className="navbar-user-icon" size={20}/>
                        {user.username}
                    </Navbar.Text>
                    <Button variant="link" 
                        className="navbar-logout-button" 
                        style={{ boxShadow: 'none'}} 
                        onClick={logout}>
                        Logout  <MdLogout className="navbar-logout-icon"/>
                    </Button>
                </Fragment>}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavbarComponent