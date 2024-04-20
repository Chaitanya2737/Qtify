import React from 'react'
import "./hero.css"
import  HEADPHONE  from "../../assets/vibrating-headphone.svg"

const Hero = () => {
  return (
    <>  
    <section className="Hero">
        <div className="HeroTitle">
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
            <img className="HeroImage" src={HEADPHONE} alt='headphone'/>
    </section>
</>
  )
}

export default Hero