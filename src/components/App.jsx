import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser, getToken, setProjects } from './../redux/actions';
import Header from './header/Header';
import Main from './content/Main';
import Footer from './footer/Footer';
import About from './about/About';
import Background from './background/Background';
import { mainApi, githubApi } from '../utils/api';
import { repos, PATHNAME } from './../utils/constants';
import './App.scss';

const { root, about } = PATHNAME;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToken({ api: mainApi, callback: getData }));
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
      <div className="page__container">
        <Header />
        <Switch>
          <Route exact path={root}>
            <Main mix="page__content" />
          </Route>
          <Route path={about}>
            <About mix="page__about" />
          </Route>
        </Switch>
        <Footer mix="page__footer" />
      </div>
    </div>
  );
};

export default App;
