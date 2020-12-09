import './App.css';

import React,{useState} from 'react' 

// import Paragraf from './components/Paragraf';
import Counter from './components/Counter';

function App() {
	const [counterIsVisible, setCounterIsVisible] = useState(true);

	return (
		<div className="App">
			{/* <Paragraf text='Ben ikinci paragrafım.' /> */}

			{
				counterIsVisible && <Counter />
			}

			<input type="button" value="toggle" onClick={() => setCounterIsVisible(!counterIsVisible)} />
			
		</div>
	);
}

export default App;
