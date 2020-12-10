import React from 'react';
import Project from './../project/Project';
import SectionTitle from './../section-title/SectionTitle';
import './Projects.scss';

const Projects = function ({projects}) {

	return (
    <section className="projects section section_narrow content__projects">
      <SectionTitle text={'Проекты'} className={'projects__section-title'} />
			<ul className="projects__list">
				{projects && projects.map(project => <Project props={project} key={project.id} />)}
			</ul>
		</section>
	);
}

export default Projects;