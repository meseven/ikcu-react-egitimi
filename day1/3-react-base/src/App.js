import logo from './logo.svg';
import './App.css';

import Paragraf from './components/Paragraf';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Paragraf />
			</header>
		</div>
	);
}

export default App;
