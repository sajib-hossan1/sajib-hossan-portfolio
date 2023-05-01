import React, { useEffect } from 'react';
import service1 from '../../images/service/service-1.png'
import service2 from '../../images/service/service-2.png'
import service3 from '../../images/service/service-3.png'
import './Skills.css'

import AOS from "aos";
import "aos/dist/aos.css";

// tech images import
import tech1 from '../../images/tech/html-5.png'
import tech2 from '../../images/tech/css-3.png'
import tech3 from '../../images/tech/bootstrap.png'
import tech4 from '../../images/tech/tailwind-css.png'
import tech5 from '../../images/tech/javascript.png'
import tech6 from '../../images/tech/react.png'
import tech7 from '../../images/tech/google-firebase.png'
import tech8 from '../../images/tech/node-js.png'
import tech9 from '../../images/tech/express-js.png'
import tech10 from '../../images/tech/mongodb.png'
import tech11 from '../../images/tech/redux.png'
import tech12 from '../../images/tech/typescript.png'
import tech13 from '../../images/tech/git.png'
import tech14 from '../../images/tech/figma.png'
import tech15 from '../../images/tech/npm.png'


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
                    <img src={service1} alt='services'/>
                        <h2>Web Design</h2>
                        <p>I will designing the web page as per the design and will give that a awesome unique look.</p>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-up" data-aos-duration="1200">
                    <div className="service-card">
                    <img src={service2} alt='services'/>
                        <h2>Web Development</h2>
                        <p>I am a Full Stack Web Developer (MERN) and have quite some experience in it as well.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mx-auto" data-aos="fade-left" data-aos-duration="1200">
                    <div className="service-card">
                    <img src={service3} alt='services'/>
                        <h2>Problem Solving</h2>
                        <p>I love to solving problems whether programming problems or real life problems.</p>
                    </div>
                </div>
            </div>
            <h3 className='tech-title'>TECH I'M FAMILIAR WITH</h3>
            <div>
                <div className='tech-container' data-aos="fade-up" data-aos-duration="1200">
                    <div className="tech-box">
                        <img src={tech1} alt="skill-img" />
                        <h5>HTML5</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech2} alt="skill-img" />
                        <h5>CSS3</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech3} alt="skill-img" />
                        <h5>Bootstrap</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech4} alt="skill-img" />
                        <h5>Tailwind</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech5} alt="skill-img" />
                        <h5>JavaScript</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech6} alt="skill-img" />
                        <h5>React.js</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech7} alt="skill-img" />
                        <h5>Firebase</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech8} alt="skill-img" />
                        <h5>Node.js</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech9} alt="skill-img" />
                        <h5>Express.js</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech10} alt="skill-img" />
                        <h5>MongoDB</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech11} alt="skill-img" />
                        <h5>Redux</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech15} alt="skill-img" />
                        <h5>NPM</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech12} alt="skill-img" />
                        <h5>TypeScript</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech13} alt="skill-img" />
                        <h5>Git</h5>
                    </div>
                    <div className="tech-box">
                        <img src={tech14} alt="skill-img" />
                        <h5>Figma</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;