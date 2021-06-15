import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { setUserData } from "./../redux/actions";
import Header from "./header/Header";
import Main from "./content/Main";
import Footer from "./footer/Footer";
import { api } from "./../utils/api";
import { repos } from "./../utils/constants";
import "./App.scss";

const App = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.getUser();
        if (userData) {
          const { name, email, avatar_url } = userData;
          store.dispatch(setUserData({ name, email, avatar_url }));
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projects = await api.getRepositories();
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
    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <div className="page">
          <Header />
          <Main projects={projects} />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
