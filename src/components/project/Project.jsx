import './Project.scss';

const Project = function () {
	return (
		<li className="projects__item">
			<iframe className="projects__site" src="https://levineye13.github.io/russian-travel/"></iframe>
			<div className="projects__container">
				<p className="projects__description">Настоящая страна не в выпусках новостей, а здесь.</p>
				<a className="projects__link" href="https://levineye13.github.io/russian-travel/" target="_blank">Посмотреть</a>
			</div>
		</li>
	);
}

export default Project;