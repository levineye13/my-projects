import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import './Main.scss';

const Main = function ({projects}) {
	return (
		<main className="content section page__content">
      <Projects projects={projects} />
      <Skills />
		</main>
	);
}

export default Main;