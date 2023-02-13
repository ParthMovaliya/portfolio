import React from 'react'
import "./portfolio.css"
import Img1 from "../../assets/proj_1.png"
import Img2 from "../../assets/proj_2.PNG"
import Img3 from "../../assets/proj_3.PNG"

const data = [
  {
    id: 1,
    image: Img1,
    title: "Pavan Digital Press",
    github: "https://github.com/ParthMovaliya/ParthMovaliya-PavanDigitalPress",
    demo: "https://parth-movaliya-pavan-digital-press.vercel.app/"
  },
  {
    id: 2,
    image: Img2,
    title: "Mind Game",
    github: "#https://github.com/ParthMovaliya/Mind-Game",
    demo: "https://mind-game-nu.vercel.app/"
  },
  {
    id: 3,
    image: Img3,
    title: "Portfolio",
    github: "https://github.com/ParthMovaliya/portfolio",
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
            data.map((item,i) =>
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