import React from 'react'

const Login = () => {
  return <div>
    <h1>Login</h1>
    <p>Access your account to manage your notes and stay organized. Login now to continue using the Note App.</p>
    <form>
        <input type="email" placeholder="Email" />
        &nbsp;
        <input type="password" placeholder="Password" />
        &nbsp;
        <button type="submit">Login</button>
    </form>
  </div>
}

export default Login