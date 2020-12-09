import './App.css';

import React,{useState} from 'react' 

// import Paragraf from './components/Paragraf';
// import Counter from './components/Counter';
import Users from './components/Users';

function App() {
	// const [counterIsVisible, setCounterIsVisible] = useState(true);

	return (
		<div>
			{/* <Paragraf text='Ben ikinci paragrafım.' /> */}

			{/* {
				counterIsVisible && <Counter />
			}

			<input type="button" value="toggle" onClick={() => setCounterIsVisible(!counterIsVisible)} />
			 */}

			 <Users />
		</div>
	);
}

export default App;
