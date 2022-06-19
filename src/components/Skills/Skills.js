import React, { useEffect } from 'react';
import './Skills.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div id='skills' className='services-container container'>
            <h1 className='section-services-title'>MY SKILLS</h1>
            <div className="row mx-auto mt-4 gy-4">
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-right" data-aos-duration="1200">
                    <div className="service-card">
                    <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/undefined/external-web-design-ux-and-ui-icons-flaticons-lineal-color-flat-icons.png" alt='services'/>
                        <h2>Web Design</h2>
                        <p>I will designing the web page as per the design and will give that a awesome unique look.</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-up" data-aos-duration="1200">
                    <div className="service-card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MERN-logo.png/800px-MERN-logo.png?20200328184328" alt='services'/>
                        <h2>Web Development</h2>
                        <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-left" data-aos-duration="1200">
                    <div className="service-card">
                    <img src="https://img.icons8.com/color/48/undefined/javascript--v1.png" alt='services'/>
                        <h2>Problem Solving</h2>
                        <p>I love to solving problems whether programming problems or real life problems.</p>
                    </div>
                </div>
            </div>
            <h3 className='tech-title'>TECH I'M FAMILIAR WITH</h3>
            <div>
                <div>
                    
                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Skills;