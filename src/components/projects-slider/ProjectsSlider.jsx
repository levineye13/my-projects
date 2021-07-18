import React from 'react';
import { useSelector } from 'react-redux';
import './ProjectsSlider.scss';

const ProjectsSlider = ({ mix = '' }) => {
  const projects = useSelector((state) => state.projects);

  const handleClick = ({ target }) => {
    const projectById = projects.find((project) => {
      if (!project.ref) {
        return undefined;
      }

      return project.ref.current.id === target.id;
    });

    if (!projectById) {
      return;
    }

    window.scrollTo({
      top: projectById.ref.current.offsetTop - 10,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`projects-slider ${mix}`}>
      {projects.length > 0 &&
        projects.map((project) => (
          <span
            className="projects-slider__indicator"
            key={project.id}
            onClick={handleClick}
            id={project.id}
          />
        ))}
    </div>
  );
};

export default ProjectsSlider;
