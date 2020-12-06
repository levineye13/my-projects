import React, { useState, useEffect } from 'react';
import Profile from './profile/Profile';
import Main from './content/Main';
import Footer from './footer/Footer';
import { api } from './../utils/api';
import { UserContext } from '../context/UserContext';
import { repos } from './../utils/constants';
import './App.scss';

const App = function () {
	const [user, setUser] = useState(null);
	const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.getUserData();
        if (userData) {
          const [info, data] = userData;
          const { name, avatar_url } = info;
          const email = data[0].payload.commits[0].author.email;
          setUser({ name, avatar_url, email });
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
        const projects = await api.getGithubProjects();
        const displayedProjects = projects.filter(item => repos.includes(item.name));
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
    <UserContext.Provider value={user}>
      <div className="App">
        <div className="page">
          <Profile />
          <Main arrProjects={projects} />
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
};

export default App;
