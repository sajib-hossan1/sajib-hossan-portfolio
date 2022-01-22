import React from 'react';
import { Col } from 'react-bootstrap';
import useAos from '../../hooks/useAos';
import './Project.css'

const Project = ({project}) => {
    const {project_name, full_ss } = project;

    useAos();

    return (
        <Col className="p-2 mt-2" sm={12} md={6} xl={4}>
            <div className="card" data-aos="zoom-in" data-aos-duration="2000">
                <div className="pr-img">
                    <img className="img-fluid" src={full_ss} alt="" />
                </div>
                <div className="card-details">
                    <h3>{project_name}</h3>
                    <button className="project-dtls-btn">Project Details</button>
                </div>
            </div>
        </Col>
    );
};

export default Project;