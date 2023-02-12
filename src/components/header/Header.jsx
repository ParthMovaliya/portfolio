import React from 'react'
import "./header.css"
import Typewriter from 'typewriter-effect'
import CTA from './CTA'
import ME from "../../assets/p01.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Parth Movaliya</h1>
        
        <h5 className="text-light">
        <Typewriter 
          options={{
            autoStart:true,
            loop:true,
            delay:100,
            strings:[ "Fullstack Developer","Student","Coder"]
          }}
        />
        </h5>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header