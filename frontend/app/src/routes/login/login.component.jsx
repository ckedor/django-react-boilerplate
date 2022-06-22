import { Fragment, useState } from "react"
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/login-form/login-form.component"
import NavbarComponent from "../../components/navbar/navbar.component"
import config from '../../config'

const Login = () => {
    
    const [showPasswordError, setShowPasswordError] = useState(false)
    const [token, setToken] = useState('')

    const handleLogin = (event, username, password) => {
        event.preventDefault();
        const url = config.API_URL + 'auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password})
        };
        fetch(url, requestOptions)
            .then((response) => {
                if (response.ok){
                    return response.json()
                }
                else return null
            })
            .then(data => {
                if (data){
                    localStorage.setItem('token', data.token)
                    setToken(data.token)
                }
                else{
                    setShowPasswordError(true)
                }
            });
    }

    if(token){
        return <Navigate to="/logged_area"/>
    }

    return(
        <Fragment>
            <NavbarComponent />
            <LoginForm handleLogin={handleLogin} showPasswordError={showPasswordError}/>
        </Fragment>
    )
}

export default Login