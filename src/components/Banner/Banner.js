import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../images/banner-img.png'
import { Typewriter } from 'react-simple-typewriter'
import Roll from 'react-reveal/Roll';

const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
                <Row className="p-4">
                    <Col className="p-2 mt-2" sm={12} md={6}>
                        <Roll left>
                            <div className="banner-text mt-4" data-aos="fade-up">
                                <h1>
                                    Hello,
                                    <br />
                                    I'm Md. Sajib Hossan
                                </h1>
                                <h2>I'm a
                                    <span style={{ color: 'red', fontWeight: 'bold', marginLeft:'10px' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter
                                            words={['Jr Web Developer', 'React Devbeloper', 'Front End Developer' , 'MERN Stack Developer', 'Web Designer']}
                                            loop
                                            cursor
                                            cursorStyle='_'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h2>
                                <div className="banner-icon">
                                    <a href="https://www.linkedin.com/in/md-sajib-hossan/"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://github.com/sajib-hossan1"><i className="fab fa-github"></i></a>
                                    <a href="https://twitter.com/mdsajibhossan14"><i className="fab fa-twitter"></i></a>
                                </div>
                                <button className="resume-btn"><a href="https://doc-0c-6s-docs.googleusercontent.com/docs/securesc/esfpmb5basb3s65ve4rm3ld8na9gem9d/1tcn4f0a7q0b5a1ejj1vl68etbh826o1/1642848900000/11560784030030156976/11560784030030156976/139UP5WnKITRTtgqXL4EQSvwdqQ65nTcj?e=download&authuser=0&nonce=1ugg46o368q9e&user=11560784030030156976&hash=fkugv7k55qt1rgb0gnm2m53tcpurmn9u">Download Resume</a></button>
                            </div>
                        </Roll>
                    </Col>
                    <Col sm={12} md={6}>
                        <Roll right>
                            <div className="banner-img text-center p-3">
                                <img className="img-fluid" src={bannerImg} alt="" />
                            </div>
                        </Roll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;