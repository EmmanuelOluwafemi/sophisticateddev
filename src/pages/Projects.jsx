import React from 'react';
import {projects} from '../utils/data';
import SingleProject from '../components/featuredSlides/SingleProject';

// Style
import {ProjectsContainer} from '../style/pages/projectStyle';

const Projects = () => {
    return (
        <ProjectsContainer>
            <div className="container">
                <h3>Featured Projects</h3>
                <div className="grid">
                    {projects.map(project => (
                        <SingleProject 
                            imgUrl={project.imageUrl} 
                            title={project.title}
                            desc={project.description}
                            comingSoon={project.comingSoon}
                        />
                    ))}
                </div>
            </div>
        </ProjectsContainer>
    )
}

export default Projects;