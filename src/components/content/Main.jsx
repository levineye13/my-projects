import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import ButtonScroll from '../button-scroll/ButtonScroll';
import './Main.scss';

const Main = ({ mix = '' }) => {
  return (
    <main className={`content ${mix}`}>
      <Profile />
      <Projects />
      <Skills />
      <ButtonScroll mix="content__button-scroll" />
    </main>
  );
};

export default Main;
