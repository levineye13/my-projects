import React, { useContext } from 'react';
import Project from './../project/Project';
import { ProjectContext } from '../../context/ProjectContext';
import './Projects.scss';

const Projects = function () {
	const projects = useContext(ProjectContext);

	return (
		<section className="projects section section_narrow content__projects">
			<ul className="projects__list">
				{projects && projects.map(item => <Project props={item} key={item.id} />)}
			</ul>
		</section>
	);
}

export default Projects;