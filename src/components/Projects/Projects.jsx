import React from 'react';
import './style.css';

const Projects = ({ projects }) => {
    return (
        <section className="projects" id='projects'>
            {projects.map((project) =>(
                <div className="project-item" style={{backgroundImage: `url(${project.img})`}}>
                    {/* <p className="project-header">project header</p>
                    <p className="project-text">project text</p> */}
                </div>
            ))}
        </section>
    )
}

export default Projects
