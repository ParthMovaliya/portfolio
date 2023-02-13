import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/p_sqr.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar:AVTR1,
    name:"Name 1",
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus facere magni dolores. Accusamus recusandae dolor facilis blanditiis. Temporibus reiciendis nihil impedit corrupti officia eum exercitationem, ullam ratione amet debitis quaerat!"
  },
  {
    avatar:AVTR1,
    name:"Name 2",
    review:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus facere magni dolores. Accusamus recusandae dolor facilis"
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} >
        {
          data.map((item,i) =>
            <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={item.avatar} alt="Client Img" />
              </div>
              <h5 className='client__name'>{item.name}</h5>
              <small className="client__review">{item.review}</small>
            </SwiperSlide>
          )
        }
      </Swiper>
    </section>
  )
}

export default Testimonials