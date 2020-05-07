import React from 'react';
import Logo from './assets/light-logo.png'
import Avatar from './assets/avatar.jpg'
import './App.scss';

function App() {
  return (
    <div className="wrapper">
			<div className="header">
				<img className="header__logo" src={Logo} alt="logo" />
				<span className="heading-title">Grow your idea here</span>
			</div>
			<div className="main">
				<div className="main__sidebar">
					Sidebar
				</div>
				<div className="main__content">
					<img className="main__thumb" src={Avatar} alt="avatar" />
				</div>
			</div>
			<div className="footer">
				Footer
			</div>
    </div>
  );
}

export default App;
