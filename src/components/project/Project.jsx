import './Project.scss';

const Project = function ({ props }) {
	const { owner: { login }, name, description } = props;
	const url = `https://${login}.github.io/${name}`;

	return (
		<li className="projects__item">
			<iframe className="projects__site" src={url}></iframe>
			<div className="projects__container">
				<p className="projects__description">{ description }</p>
				<a className="projects__link" href={url} target="_blank">Посмотреть</a>
			</div>
		</li>
	);
}

export default Project;