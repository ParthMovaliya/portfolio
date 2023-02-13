import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/t_1.PNG"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar:AVTR1,
    name:"AnileBhai(Pavan Digital Press)",
    review:"Nice Work, Good Job!"
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