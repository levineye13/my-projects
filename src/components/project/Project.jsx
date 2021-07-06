import './Project.scss';

const Project = ({ project }) => {
  const {
    owner: { login },
    name = '',
    description = '',
  } = project;

  const projectUrl = `https://${login}.github.io/${name}`;

  return (
    <li className="projects__item">
      <iframe className="projects__site" src={projectUrl} title={name} />
      <div className="projects__container">
        <h3 className="projects__name">{name}</h3>
        <p className="projects__description">{description}</p>
        <a
          className="projects__link"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          Посмотреть
        </a>
      </div>
    </li>
  );
};

export default Project;
