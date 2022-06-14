import { Component } from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './login.css'

class LoginComponent extends Component {

    constructor(){
        super();

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUsername = (event) => {
        this.setState({username: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
    }

    handleSubmit = (event) => {
        var url = 'http://127.0.01:8000/auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.username, password: this.state.password})
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token)
                this.props.handleToken(data.token)
            }
            );
        event.preventDefault();
    }

    render(){

        const { handleUsername } = this;
        const { handlePassword } = this;
        const { handleSubmit } = this;
        
        const {username, password} = this.state;
        return(
            <div className="container">
                <div className="login-wrapper">
                    <div className="row justify-content-center">
                        <div className="col-2">
                            <h2 className="login-title">Login</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-3 form-wrapper">
                            <Form onSubmit={handleSubmit}>
                                <div className="row input-wrapper">
                                    <div className="col-12">
                                        <label>Name</label>  
                                        <input className="input-field" type="text" value={username} onChange={handleUsername} />
                                    </div>
                                </div>
                                <div className="row input-wrapper">
                                    <div className="col-12">
                                        <label>Password</label>
                                        <input className="input-field" type="password" value={password} onChange={handlePassword} />
                                    </div>
                                </div>
                                <div className="row button-wrapper">
                                    <Button className="btn-info" variant="dark" type="submit" value="Submit" >
                                        Login
                                    </Button>
                                </div>
                            </Form>
                        </div>       
                    </div>
                </div>
            </div>
        )
    }

}

export default LoginComponent