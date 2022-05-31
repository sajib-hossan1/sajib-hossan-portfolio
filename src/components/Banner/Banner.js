import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../images/banner-img.png'
import resume from '../../resume/Sajib_Hossan_WebDeveloper_Resume_2022.pdf'
import { useTypewriter, Cursor } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    const words = ['Jr Web Developer', 'React Devbeloper', 'Front End Developer' , 'MERN Stack Developer', 'Web Designer'];
    const { text } = useTypewriter({
        words,
        loop: 0, // Infinit
    });

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div className="banner-container">
            <div className="effect-wrap">
                <div className="effect effect-1"></div>
                <div className="effect effect-2"></div>
            </div>
            <Container>
                <Row className="mt-2 banner-row flex-sm-row-reverse">
                    <Col sm={12} md={6} lg={6}>
                        <div data-aos="fade-left" data-aos-duration="2000" className="banner-img mt-4 text-center">
                            <img className="img-fluid pt-3" src={bannerImg} alt="" />
                        </div>
                    </Col>
                    <Col className="p-2 mt-2" sm={12} md={6} lg={6}>
                        <div className="banner-text mt-3" data-aos="fade-up">
                            <h2 className='m-0'>
                                Hello,
                            </h2>
                            <h1>
                                I'm Sajib Hossan
                            </h1>
                            <h2>I'm a
                                <span style={{ color: 'red', fontWeight: 'bold', marginLeft:'10px' }}>
                                    {text}
                                    <Cursor
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
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;