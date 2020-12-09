import './App.css';

import Paragraf from './components/Paragraf';

function App() {
	// const myprops = {
	// 	text: 'Selam',
	// 	color:'red',
	// 	fontSize: 14
	// };

	return (
		<div className="App">
			{/* <Paragraf {...myprops}  /> */}
			
			<Paragraf text='Ben ikinci paragrafım.' />
		</div>
	);
}

export default App;
