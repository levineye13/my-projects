import './Project.scss';

const Project = function ({ props }) {
  const { owner: { login }, name, description } = props;
	const projectUrl = `https://${login}.github.io/${name}`;

	return (
		<li className="projects__item">
			<iframe className="projects__site" src={projectUrl}></iframe>
			<div className="projects__container">
				<p className="projects__description">{ description }</p>
				<a className="projects__link" href={projectUrl} target="_blank">Посмотреть</a>
			</div>
		</li>
	);
}

export default Project;