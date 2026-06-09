import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectEmail, selectPassword } from '../redux/features/loginSlice.js';
import { setEmail, setPassword } from '../redux/features/loginSlice.js';
import { useNavigate } from 'react-router';

const Login = () => {
  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logged in with Email: ${email}`);
    dispatch(setEmail(''));
    dispatch(setPassword(''));
    navigate('/');
  }

  return <div>
    <h1>Login</h1>
    <p>Access your account to manage your notes and stay organized. Login now to continue using the Note App.</p>
    <form onSubmit={handleSubmit}>
        <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        &nbsp;
        <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        &nbsp;
        <button type="submit">Login</button>
    </form>
  </div>
}

export default Login