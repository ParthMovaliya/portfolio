import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/p_sqr.png"

const data = [
  {
    id: 1,
    image: Img1,
    title: "Project Title",
    github: "#",
    demo: "#"
  },
  {
    id: 1,
    image: Img1,
    title: "Project Title",
    github: "#",
    demo: "#"
  },
  {
    id: 1,
    image: Img1,
    title: "Project Title",
    github: "#",
    demo: "#"
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
          {
            data.map((item) =>
              <article className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={item.image} alt="img" />
                </div><h3>{item.title}</h3><div className="portfolio__item-cta">
                  <a href={item.github} className='btn' targrt="_blank">Github</a>
                  <a href={item.demo} className='btn btn-primary' targrt="_blank">Live Demo</a>
                </div>
              </article>
            )
          }

      </div>
    </section>
  )
}

export default Portfolio