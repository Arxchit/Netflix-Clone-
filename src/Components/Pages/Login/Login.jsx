import React from 'react'
import { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'

const Login = () => {

  const [signState, setsignState] = useState("Sign Up")

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder="Your name" /> : <></>}

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <a href="https://help.netflix.com/en/search?q=sign+in">Need Help?</a>
          </div>
        </form>
        <div className="form-switch">

          {signState === "Sign Up" ?
            <p>Already have account?<span onClick={()=> {setsignState("Sign In")}}>Sign in Now</span></p>
            :<p>New to Netflix <span onClick={()=> {setsignState("Sign Up")}}>Sign Up Now</span></p>
          }

        </div>
      </div>
    </div>
  )
}

export default Login
