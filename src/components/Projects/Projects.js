import React, { useEffect, useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import Project from '../Project/Project';
import './Projects.css'

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    }, [])

    return (
        <div id="projects" className="projects-container">
            <h1 className="section-title section-projects-title">PROJECTS</h1>
            <Container>
                <Row className="g-5 m-0">
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        >

                        </Project>)
                    }
                </Row>
            </Container>
        </div>
    )
}
