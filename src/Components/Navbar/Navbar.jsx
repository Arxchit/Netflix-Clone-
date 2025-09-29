import React from 'react'
import './Navbar.css'
import search from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profile from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'

const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='navBar-left'>
          <img src="../../logo.png" alt="Logo" />
          <ul>
            <li>Home</li>
            <li>Tv Show</li>
            <li>Movie</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>
         <div className='navBar-right'>
          <img src = {search} alt="" className='icons' />
          <p>children</p>
          <img src= {bellIcon} alt="" className='icons' />

          <div className="navbar-profile">
            <img src= {profile} alt="" className='profile' />
            <img src= {caret_icon} alt="" />
            <div className="dropdown">
              <p>Sign Out of Netflix</p>
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Navbar