import Projects from '../projects/Projects';
import './Main.scss';

const Main = function ({arrProjects}) {
	return (
		<main className="content section page__content">
			<Projects arrProjects={arrProjects} />
		</main>
	);
}

export default Main;