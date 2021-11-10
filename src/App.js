import { useState } from 'react';
import './App.css';
import EntryScreen from './Components/EntryScreen/EntryScreen.js';
import HomePage from './Components/HomePage/HomePage.js';

function App() {
	const [LoadingScreen, setLoadingScreen] = useState(<EntryScreen />);

	setTimeout(() => {
		setLoadingScreen(<HomePage />);
	}, 3000);

	return <div className="App">{LoadingScreen}</div>;
}

export default App;
