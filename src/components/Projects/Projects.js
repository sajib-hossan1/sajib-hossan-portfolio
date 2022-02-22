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
            <h1 className="section-title section-projects-title">Projects</h1>
            <Container>
                <Row className="p-4" gap={5}>
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
