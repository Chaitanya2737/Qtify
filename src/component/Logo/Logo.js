import React from 'react'
import  LOGO  from "../../assets/logo (2).png";
import "./Logo.css"
const Logo = () => {
  return (
    <>
    <div className='position'>
    <img  src={LOGO} width={67} className='imgLogo' alt="Logo" />
    </div>
    </>

  )
}

export default Logo