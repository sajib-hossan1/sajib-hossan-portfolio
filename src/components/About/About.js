import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
import aboutImg from '../../images/about.jpg';


import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return (
        <div id="about" className="about-container">
            <h1 className="section-title section-title-about">ABOUT ME</h1>
            <Container>
                <Row className="p-4">
                    <Col data-aos="fade-up" data-aos-duration="1200" className="p-2 mt-2" sm={12} md={6}>
                        <div className="about-img text-center">
                            <img className="img-fluid" src={aboutImg} alt="my-about-img" />
                        </div>
                    </Col>
                    <Col sm={12} md={6} className="d-flex align-items-center justify-content-center">
                        <div data-aos="fade-up" data-aos-duration="1200" className="about-text">
                            <h3>Hello, I'm Md. Sajib Hossan</h3>
                            <p>I'm from Bangladesh. I always love to explore new things. I am interested in Web Development. I love to code and always try to make new websites with creative ideas.</p>
                            <p>I'm passionate to do coding because I love this field. I make fully mobile responsive and real-world websites. I make front-end and back-end websites also.</p>
                            <p>Now, I'm learning MERN Stack for Web Development as well as Web App Development. Recently, I've completed two MERN Stack projects. Please check those projects and also check my other projects.
                            </p>
                            <div className='about-hgl-txt'>
                                <h5>Here are a few highlights :</h5>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>Full Stack Web Development</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>Interactive Front End as per the design</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>React Web Application</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>Redux for State Mnanagement</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>Building REST API</p>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <i className="fa-solid fa-circle"></i>
                                    <p className='m-0'>Managing Database (MongoDb)</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;