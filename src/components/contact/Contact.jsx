import React from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { BsInstagram,BsWhatsapp } from "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dpob2of', 'template_6xf9mq4', form.current, 'eBIQ7Pl0zl3GDBHtL');

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>parthmovaliya55055@gmail.com</h5>
            <a href="mailto:parthmovaliya55055@gmail.com">Send a Mail</a>
          </article>
          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>_parth_movaliya_</h5>
            <a href="https://ig.me/m/_parth_movaliya_" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            {/* <h5>parthmovaliya55055@gmail.com</h5> */}
            <a href="https://wa.me/916356380166" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message"  rows="7" required placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact