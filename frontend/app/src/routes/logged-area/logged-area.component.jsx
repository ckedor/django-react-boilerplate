import { useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import NavbarComponent from '../../components/navbar/navbar.component'
import config from '../../config'

const LoggedArea = () => {

  const [user, setUser ] = useState(null);

  const handleLogout = () => {
    setUser(null)
  }

  const getUser = (token) => {
    const url = config.API_URL + 'users/current_user';
    const requestOptions = {
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Token ' + token}
    };
    fetch(url, requestOptions)
        .then((response) => {
            if (response.ok){
                return response.json()} 
            else 
                return null
        })
        .then(data => {
            if (data){
              setUser(data)
            }
        }
    );
  }

  const token = localStorage.getItem('token')

  if (!token)
    return <Navigate to="/login" replace />;
  if (token && !user ){
    getUser(token)
  }

  console.log(user?.username)
  return (
    <div>
      <NavbarComponent 
        handleLogout={handleLogout}
        username={user?.username}/>
      <Outlet />
    </div>
  )
}

export default LoggedArea;
