import React from 'react'

const Register = () => {
  return <div>
    <h1>Register</h1>
    <p>Create an account to start taking notes and organizing your thoughts. Register now to access all the features of the Note App.</p>
    <form>
        <input type="text" placeholder="Username" />
        &nbsp;
        <input type="email" placeholder="Email" />
        &nbsp;
        <input type="password" placeholder="Password" />
        &nbsp;
        <button type="submit">Register</button>
    </form>
  </div>
}

export default Register