import React, { useEffect } from 'react'
import Home from './Components/Pages/Home/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './Components/Pages/Login/Login'
import Player from './Components/Pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './fireBase'
import { ToastContainer, toast } from 'react-toastify';


const App = () => {

  const navigate = useNavigate()

    useEffect(()=> {
      onAuthStateChanged(auth, async(user)=> {
        if(user) {
          console.log("Logged in")
          navigate('/')
        } else {
          console.log("Logged out")
          navigate('/login')
        }
      })
    },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/player/:id' element = {<Player/>}/>
      </Routes>
    </div>
  )
}

export default App