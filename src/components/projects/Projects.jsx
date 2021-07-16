import React from 'react';
import { useSelector } from 'react-redux';

import Project from '../project/Project';
import SectionTitle from '../section-title/SectionTitle';
import ProjectsSlider from '../projects-slider/ProjectsSlider';
import ButtonBack from '../button-back/ButtonBack';
import ButtonScroll from '../button-scroll/ButtonScroll';
import './Projects.scss';
import translationData from '../../translation';

const Projects = ({ mix = '' }) => {
  const { projects, language } = useSelector((state) => state);

  const translation = translationData.projects[language];
  return (
    <section className={`projects ${mix}`}>
      <SectionTitle
        text={translation.title}
        className="projects__section-title"
      />
      <ButtonBack />
      <ul className="projects__list">
        {projects &&
          projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
      </ul>
      <ProjectsSlider mix="projects__projects-slider" />
      <ButtonScroll mix="projects__button-scroll" />
    </section>
  );
};

export default Projects;
