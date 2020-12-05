import React, { useState, useEffect } from 'react';
import Profile from './profile/Profile';
import Main from './content/Main';
import Footer from './footer/Footer';
import { api } from './../utils/api';
import { ProjectContext } from '../context/ProjectContext';
import './App.scss';

const App = function () {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		api.getGithubProjects()
			.then(data => {
				const resProjects = data.filter(item => item.name !== 'levineye13');
				setProjects(resProjects);
			})
			.catch(error => console.error(error));
	}, []);

	return (
		<ProjectContext.Provider value={projects}>
			<div className="App">
				<div className="page">
					<Profile />
					<Main />
					<Footer />
				</div>
			</div>
		</ProjectContext.Provider>
  );
};

export default App;
