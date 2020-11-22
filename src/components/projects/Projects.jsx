import Project from './../project/Project';
import './Projects.scss';

const Projects = function () {
	return (
		<section className="projects">
			<ul className="projects__list">
				<Project />
			</ul>
		</section>
	);
}

export default Projects;