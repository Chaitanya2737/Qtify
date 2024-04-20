import React from 'react'
import  HEADPHONE  from "../../assets/vibrating-headphone.svg"
import "./hero.css"

const Hero = () => {
  return (
    <div className='wrapper'>
      <div className='text'>
        <h2>
        100 Thousand Songs, ad-free
        </h2>
        <h2>
        Over thousands podcast episodes
        </h2>
      </div>
      <div className='heroImg'>
        <img src={HEADPHONE} alt="" />
      </div>
    </div>
  )
}

export default Hero