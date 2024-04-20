import React from 'react'
import Logo from '../Logo/Logo'
import "./navbar.css"
import Search from '../searchbar/Search'
import Feedback from '../FeedBack/Feedback'
const Navbar = () => {
  return (
    <div className='nav'>
    <Logo />
    <Search />
    <Feedback />
    </div>
  )
}

export default Navbar