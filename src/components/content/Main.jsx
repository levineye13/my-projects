import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import "./Main.scss";

const Main = ({ mix = "", projects }) => {
  return (
    <main className={`content ${mix}`}>
      <Profile />
      <Projects projects={projects} />
      <Skills />
    </main>
  );
};

export default Main;
