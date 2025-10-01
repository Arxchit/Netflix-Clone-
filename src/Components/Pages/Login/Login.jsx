import React from 'react'
import './Login.css'
import logo from '../../../assets/logo.png' 

const Login = () => {
  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="https://help.netflix.com/en/search?q=sign+in">Need Help?</a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
