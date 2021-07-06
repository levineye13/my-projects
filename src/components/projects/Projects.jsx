import React from 'react';
import { useSelector } from 'react-redux';
import Project from './../project/Project';
import SectionTitle from './../section-title/SectionTitle';
import './Projects.scss';

const Projects = () => {
  const projects = useSelector((state) => state.projects);

  return (
    <section className="projects content__projects" id="projects">
      <SectionTitle text="Проекты" className="projects__section-title" />
      <ul className="projects__list">
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </ul>
    </section>
  );
};

export default Projects;
