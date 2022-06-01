import React, { useEffect } from 'react';
import { Col } from 'react-bootstrap';
import './Project.css'

import AOS from "aos";
import "aos/dist/aos.css";

const Project = ({project}) => {
    const {project_name, live_site, github_client, github_server, thumb1, thumb2, technology } = project;

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <Col className='mx-auto' sm={12} md={6} xl={5} data-aos-offset="90" data-aos="zoom-in" data-aos-duration="1200">
            <div className="card">
                <div className="pr-img">
                    <img src={thumb1} alt="" />
                    { thumb2 && <img src={thumb2} className="img-hover" alt="" /> }
                </div>
                <div className="technology-used-btn">
                    {
                        technology?.map((item, i) => <button data-aos="zoom-in-up" data-aos-duration="900" className='technology-btn' key={i}>{item.name}</button>)
                    }
                </div>
                <div className="card-details">
                    <h3 data-aos-offset="80" data-aos="zoom-in-right" data-aos-duration="900">{project_name}</h3>
                    <a data-aos-offset="80" data-aos="zoom-in-left" data-aos-duration="900" href={live_site} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
                <div data-aos-offset="70" data-aos="fade-up" data-aos-duration="1000" className="project-code-links">
                    <span>Code : </span>
                    <a href={github_client} target="_blank" rel="noopener noreferrer">GitHub-Client</a>
                    { github_server && <a href={github_server} target="_blank" rel="noopener noreferrer">GitHub-Server</a>}
                </div>
            </div>
        </Col>
    );
};

export default Project;