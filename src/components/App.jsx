import React, { useState, useEffect } from 'react';
import Profile from './profile/Profile';
import Main from './content/Main';
import Footer from './footer/Footer';
import { api } from './../utils/api';
import { ProjectContext } from '../context/ProjectContext';
import { UserContext } from '../context/UserContext';
import { repos } from './../utils/constants';
import './App.scss';

const App = function () {
	const [user, setUser] = useState(null);
	const [projects, setProjects] = useState(null);

	useEffect(async () => {
		try {
      const userData = await api.getGithubUserInfo();
      if (userData) {
        setUser(userData);
			}
		} catch (err) {
			console.error(err);
		}
	}, []);

	useEffect(() => {
		api.getGithubProjects()
			.then(data => {
				const resProjects = data.filter(item => repos.includes(item.name));
				if (resProjects) {
					setProjects(resProjects);
			  }
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<ProjectContext.Provider value={projects}>
			<UserContext.Provider value={user}>
				<div className="App">
					<div className="page">
						<Profile />
						<Main />
						<Footer />
					</div>
				</div>
			</UserContext.Provider>
		</ProjectContext.Provider>
  );
};

export default App;
