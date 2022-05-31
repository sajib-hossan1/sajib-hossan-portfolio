import emailjs from 'emailjs-com';
import React, { useEffect, useRef, useState } from 'react';
import './Contact.css'
import { Spinner } from 'react-bootstrap'

import AOS from "aos";
import "aos/dist/aos.css";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [spinner, setSpinner] = useState(false);

    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        if(!form.current[0].value){
            return notify('name');
        }
        else if(!form.current[1].value){
            return notify('email');
        }
        else if(!form.current[2].value){
            return notify('message');
        }

        setSpinner(true)
        emailjs.sendForm('service_z0owob8', 'template_6saru7e', form.current, 'user_4DXp2K83toEJGNpsN9MDC')
        .then((result) => {
            if(result.text === 'OK'){
                notify('success')
                e.target.reset();
                setSpinner(false);
            }
        }, (error) => {
            notify('error')
        });

    }
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    const notify = (status) => {
        if(status === 'name'){
            return toast.warning("Please Type Your Name!");
        }
        else if(status === 'email'){
            return toast.warning("Please Type Your Email!");
        }
        else if(status === 'message') {
            return toast.warning("Please Type Your Message!");
        }
        else if(status === 'success') {
            return toast.success("Successful. I will get back to you soon😉");
        }
        else if(status === 'error') {
            return toast.error("An error occured.");
        }
    }
      

    return (
        <div id="contact" className="form-container">
            <h2 className="section-title contact-section-title">Contact With Me</h2>
            <div className="container mt-5">
                <div className="row">
                    <div data-aos="fade-down" data-aos-duration="1200" className="col-lg-6 col-md-6 col-sm-12">
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
                    <div data-aos="fade-up" data-aos-duration="1200" className="col-lg-6 col-md-6 col-sm-12">
                        <h3>Message me</h3>
                        <div className="form">
                            <form ref={form} onSubmit={sendEmail}>
                                <label>Name</label>
                                <input className="mb-3" type="text" name="name" />
                                <label>Email</label>
                                <input className="mb-3" type="email" name="email" />
                                <label>Message</label>
                                <textarea className="text-area" name="message" />
                                { spinner && <Spinner className="spin" animation="border" variant="info" />}
                                <input onClick={notify} className="send-btn" type="submit" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer 
                bodyClassName="toast-body"
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Contact;