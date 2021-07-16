import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  setUser,
  getToken,
  setProjects,
  setLanguage,
} from './../redux/actions';
import Header from './header/Header';
import Main from './content/Main';
import Footer from './footer/Footer';
import About from './about/About';
import Projects from './projects/Projects';
import Skills from './skills/Skills';
import Background from './background/Background';
import ProgressBar from './progress-bar/ProgressBar';
import { mainApi, githubApi } from '../utils/api';
import { useScrollProgress } from '../hooks/useScrollProgress';
import { repos, PATHNAME, LANGUAGES } from './../utils/constants';
import './App.scss';

const { root, about, projects, skills } = PATHNAME;

const App = () => {
  const dispatch = useDispatch();

  const progress = useScrollProgress();

  useEffect(() => {
    dispatch(getToken({ api: mainApi, callback: getData }));
  }, []);

  useEffect(() => {
    dispatch(setLanguage(LANGUAGES.ru));
  }, []);

  const getData = (token) => {
    if (token) {
      getUser(token);
      getRepos(token);
    }
  };

  const getUser = (token) => {
    dispatch(setUser({ api: githubApi, token }));
  };

  const getRepos = (token) => {
    dispatch(setProjects({ api: githubApi, token, reposToDisplay: repos }));
  };

  return (
    <div className="page">
      <Background />
      <ProgressBar
        mix="page__progress-bar"
        modifier="progress-bar_type_vertical"
        progress={progress.percents}
      />
      <div className="page__container">
        <Header />
        <Switch>
          <Route exact path={root}>
            <Main mix="page__content" />
          </Route>
          <Route path={about}>
            <About mix="page__about" />
          </Route>
          <Route path={projects}>
            <Projects mix="page__projects" />
          </Route>
          <Route path={skills}>
            <Skills mix="page__skills" />
          </Route>
        </Switch>
        <Footer mix="page__footer" />
      </div>
    </div>
  );
};

export default App;
