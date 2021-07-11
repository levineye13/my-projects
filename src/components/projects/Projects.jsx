import React from 'react';
import { useSelector } from 'react-redux';
import Project from './../project/Project';
import SectionTitle from './../section-title/SectionTitle';
import './Projects.scss';
import translationData from '../../translation';

const Projects = () => {
  const state = useSelector((state) => ({
    projects: state.projects,
    language: state.language,
  }));

  const translation = translationData.projects[state.language];

  return (
    <section className="projects content__projects" id="projects">
      <SectionTitle
        text={translation.title}
        className="projects__section-title"
      />
      <ul className="projects__list">
        {state.projects &&
          state.projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </ul>
    </section>
  );
};

export default Projects;
