import './App.css';
import EntryScreen from './Components/EntryScreen/EntryScreen';

function App() {
	const [LoadingScreen, setLoadingScreen] = useState(<EntryScreen />);

	setTimeout(() => {
		setLoadingScreen(<HomePage />);
	}, 3000);

	return <div className="App"></div>;
}

export default App;
