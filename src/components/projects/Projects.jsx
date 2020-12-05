import React, { useContext } from 'react';
import Project from './../project/Project';
import { UserContext } from './../../context/UserContext';
import './Projects.scss';

const Projects = function () {
	const userContext = useContext(UserContext);

	return (
		<section className="projects section section_narrow content__projects">
			<ul className="projects__list">
				{userContext.length > 0 && userContext.map(item => <Project props={item} key={item.id} />)}
			</ul>
		</section>
	);
}

export default Projects;