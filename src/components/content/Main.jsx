import Projects from '../projects/Projects';
import './Main.scss';

const Main = function ({projects}) {
	return (
		<main className="content section page__content">
			<Projects projects={projects} />
		</main>
	);
}

export default Main;