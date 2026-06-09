import React from 'react'
import { Link } from 'react-router';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';

const NavBar = () => {
  return <div>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/register">Register</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
    </ul>
  </div>
}

export default NavBar