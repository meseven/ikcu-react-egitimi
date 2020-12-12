import "./App.css";

import Counter from "../Counter/Counter";
import Todo from "../Todo/Todo";

function App() {
	return (
		<div className="App">
			<Todo />
			<hr />

			<Counter />
			<hr />

			<header className="App-header">
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn
				</a>
			</header>
		</div>
	);
}

export default App;
