import React from 'react'
import { useState } from 'react'
import './Login.css'
import logo from '../../../assets/logo.png'
import { login, signUp } from '../../../fireBase' 

const Login = () => {

  const [signState, setsignState] = useState("Sign Up")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const user_auth = async(event) => {
    event.preventDefault()

    if (signState === "Sign In") {
      await login(email, password)
    } else {
      await signUp(name , email, password)
    }
  }

  return (
    <div className="login">
      <img src={logo} className="login-logo" alt="Logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? <input type="text" placeholder="Your name" value={name} onChange={(e)=>{setName(e.target.value)}} /> : <></>}

          <input value={email} type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
          <input value={password} type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button onClick={user_auth} type="submit">{signState}</button>
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
