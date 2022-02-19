import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../images/banner-img.png'
import { Typewriter } from 'react-simple-typewriter'
import Roll from 'react-reveal/Roll';
import resume from '../../resume/Sajib_Hossan_WebDeveloper_Resume_2022.pdf'

const Banner = () => {
    return (
        <div className="banner-container">
            <Container>
                <Row className="mt-2 banner-row flex-sm-row-reverse">
                    <Col sm={12} md={6} lg={6}>
                        <Roll right>
                            <div className="banner-img mt-4 text-center">
                                <img className="img-fluid pt-3" src={bannerImg} alt="" />
                            </div>
                        </Roll>
                    </Col>
                    <Col className="p-2 mt-2" sm={12} md={6} lg={6}>
                        <Roll left>
                            <div className="banner-text mt-3" data-aos="fade-up">
                                <h2 className='m-0'>
                                    Hello,
                                </h2>
                                <h1>
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
                                <button className="resume-btn"><a href={resume}>Download Resume</a></button>
                            </div>
                        </Roll>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;