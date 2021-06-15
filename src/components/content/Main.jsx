import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./Main.scss";

const Main = ({ projects }) => {
  return (
    <main className="content section page__content">
      <Profile />
      <Projects projects={projects} />
      <Skills />
    </main>
  );
};

export default Main;
