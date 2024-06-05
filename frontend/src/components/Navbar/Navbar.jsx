// import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar'>
    <img src={assets.logo} className='logo'/>
    <ul className='navbar-menu'>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>

    </ul>
    <div className='navbar-right'>
        <img src={assets.search_icon} />
        <div className='navbar-search-icon'>
            <img src={assets.basket_icon} />
            <div className='dot'></div>
        </div>
        <button>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar