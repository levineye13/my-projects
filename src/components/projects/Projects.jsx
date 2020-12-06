import React, { useContext } from 'react';
import Project from './../project/Project';
import './Projects.scss';

const Projects = function ({arrProjects}) {

	return (
		<section className="projects section section_narrow content__projects">
			<ul className="projects__list">
				{arrProjects && arrProjects.map(project => <Project props={project} key={project.id} />)}
			</ul>
		</section>
	);
}

export default Projects;