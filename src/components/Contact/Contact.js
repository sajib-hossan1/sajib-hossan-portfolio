import emailjs from 'emailjs-com';
import React, { useRef } from 'react';
import useAos from '../../hooks/useAos';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    useAos();

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('service_z0owob8', 'template_6saru7e', form.current, 'user_4DXp2K83toEJGNpsN9MDC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
    }
    
    return (
        <div id="contact" className="form-container">
            <h2 className="section-title contact-section-title">Contact With Me</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Get In Touch</h3>
                        <div className="contact-brief">
                            <p><span>What is going on?</span> I am always available for freelancing work if the right project comes along me. Feel free to contact me😉.</p>
                        </div>
                        <div className="more-contact-container">
                            <div className="first">
                                <i className="fa-solid fa-user"></i>
                                <div>
                                    <p>Name</p>
                                    <h6>Md. Sajib Hossan</h6>
                                </div>
                            </div>
                            <div className="second">
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <p>Address</p>
                                    <h6>Farmgate, Dhaka, Bangladesh</h6>
                                </div>
                            </div>
                            <div className="third">
                                <i className="fa-solid fa-envelope"></i>
                                <div>
                                    <p>E-mail</p>
                                    <h6>sajib.hossan112@gmail.com</h6>
                                </div>
                            </div>
                            <div className="fourth">
                                <i className="fa-solid fa-phone"></i>
                                <div>
                                    <p>Phone</p>
                                    <h6>+880 1779128124</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Message me</h3>
                        <div className="form" data-aos="fade-up" data-aos-duration="1500">
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input className="mb-3" type="text" name="name" />
                                <label>Email</label>
                                <input className="mb-3" type="email" name="email" />
                                <label>Message</label>
                                <textarea className="text-area" name="message" />
                                <input className="send-btn" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;