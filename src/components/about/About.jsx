import React from 'react'
import "./about.css"
import ME from "../../assets/p_sqr.png"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>1+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>5 Completed</small>
            </article>
          </div>

          <p>
          I am currently pursuing my B.Tech in Computer Science Engineering from Leelaben Dashrathbhai Ramdas Patel Institute Of Technology And Research (LDRP-ITR).I have completed Full Stack Web Development Program from The Complete 2022 Web Development Bootcamp by Dr. Angela Yu from Udemy(Online), I will graduate in 2024. I have Completed my SSC & HSC from Gujarat State Board in 2018 & 2020 respectively.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About