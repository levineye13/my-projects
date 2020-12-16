import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { setUserData } from './../redux/actions'
import Profile from './profile/Profile';
import Main from './content/Main';
import Footer from './footer/Footer';
import { api } from './../utils/api';
import { repos } from './../utils/constants';
import './App.scss';

const App = function () {
	const [projects, setProjects] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await api.getUserData();
        if (userData) {
          const [info, data] = userData;
          const { name, avatar_url } = info;
          const event = data.find((item) => item.type === 'PushEvent');
          const { email } = event.payload.commits[0].author;
          store.dispatch(setUserData({name, email, avatar_url}));
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
    <Provider store={store}>
      <div className="App">
        <div className="page">
          <Profile />
          <Main projects={projects} />
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;
