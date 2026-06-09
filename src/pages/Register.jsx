import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectUsername, selectEmail, selectPassword } from '../redux/features/registerSlice.js';
import { setUsername, setEmail, setPassword } from '../redux/features/registerSlice.js';
import { useNavigate } from 'react-router';

const Register = () => {

    const name = useSelector(selectUsername);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Registered with Username: ${name} & Email: ${email}`);
        dispatch(setUsername(''));
        dispatch(setEmail(''));
        dispatch(setPassword(''));
        navigate('/login');
    }

    return <div>
        <h1>Register</h1>
        <p>Create an account to start taking notes and organizing your thoughts. Register now to access all the features of the Note App.</p>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" value={name} onChange={(e) => dispatch(setUsername(e.target.value))} />
            &nbsp;
            <input type="email" placeholder="Email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))} />
            &nbsp;
            <input type="password" placeholder="Password" value={password} onChange={(e) => dispatch(setPassword(e.target.value))} />
            &nbsp;
            <button type="submit">Register</button>
        </form>
    </div>
}

export default Register