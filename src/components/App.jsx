import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { setUserData } from "./../redux/actions";
import Header from "./header/Header";
import Main from "./content/Main";
import Footer from "./footer/Footer";
import About from "./about/About";
import { mainApi, githubApi } from "../utils/api";
import { repos, PATHNAME } from "./../utils/constants";
import "./App.scss";

const { root, about } = PATHNAME;

const App = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { token } = await mainApi.getToken();

        if (token) {
          await getUser(token);
          await getRepos(token);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const getUser = async (token) => {
    try {
      const userData = await githubApi.getUser(token);

      if (userData) {
        const { name, email, avatar_url } = userData;
        store.dispatch(setUserData({ name, email, avatar_url }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getRepos = async (token) => {
    try {
      const projects = await githubApi.getRepositories(token);
      const displayedProjects = projects.filter((item) =>
        repos.includes(item.name)
      );
      if (displayedProjects) {
        setProjects(displayedProjects);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div className="page">
          <Header />
          <Switch>
            <Route exact path={root}>
              <Main mix="section page__content" projects={projects} />
            </Route>
            <Route path={about}>
              <About mix="section page__about" />
            </Route>
          </Switch>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
