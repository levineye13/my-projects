import React from 'react';
import Profile from './profile/Profile';
import Main from './main/Main';
import Footer from './footer/Footer';
import './App.scss';

const App = function () {
  return (
    <div className="App">
			<div className="page">
				<Profile />
				<Main />
				<Footer />
			</div>
    </div>
  );
};

export default App;
