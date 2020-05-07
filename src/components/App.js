import React, { useState } from 'react';
import './App.scss';
import { UserProvider } from '../context/UserContext';
import Content from './Content'
import Footer from './Footer'

function App() {
	const [user, setUser] = useState({
		name: 'Tim'
	})
	return (
		<React.Fragment>
			<UserProvider
				value={{
					name: user.name,
					setUser
				}}>
				<Content />
			</UserProvider>
			<Footer />
		</React.Fragment>
	);
}

export default App;
