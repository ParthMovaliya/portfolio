import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        
        <article className="service">
          <div className="servise__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UX Design.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Template Designing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Banner Designing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo Designing.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="servise__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Single page Website(HTML/CSS/Js).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Multiple page Website(HTML/CSS/Js).</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Js single page Website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React Js Multiple page Website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fullstack Website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Connectivity.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Management.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="servise__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Media Management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content Writing.</p>
            </li>
            {/* <li>
              <BiCheck className='service__list-icon'/>
              <p>.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>.</p>
            </li> */}
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services