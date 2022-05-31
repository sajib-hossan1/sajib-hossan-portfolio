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
        <Col className='mx-auto' sm={12} md={6} xl={5}>
            <div className="card"  data-aos="zoom-in" data-aos-duration="1500">
                <div className="pr-img">
                    <img src={thumb1} alt="" />
                    { thumb2 && <img src={thumb2} className="img-hover" alt="" /> }
                </div>
                <div className="technology-used-btn">
                    {
                        technology?.map((item, i) => <button className='technology-btn' key={i}>{item.name}</button>)
                    }
                </div>
                <div className="card-details">
                    <h3>{project_name}</h3>
                    <a href={live_site} target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
                <div className="project-code-links">
                    <span>Code : </span>
                    <a href={github_client} target="_blank" rel="noopener noreferrer">GitHub-Client</a>
                    { github_server && <a href={github_server} target="_blank" rel="noopener noreferrer">GitHub-Server</a>}
                </div>
            </div>
        </Col>
    );
};

export default Project;