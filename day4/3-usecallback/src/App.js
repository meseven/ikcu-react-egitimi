import "./App.css";

import { useState, useCallback } from "react";

import Child from "./components/Child";

function App() {
	const [count, setCounter] = useState(0);

	const increment = useCallback(() => {
		setCounter((c) => c + 1);
	}, [setCounter]);

	return (
		<div className="App">
			<h1>{count}</h1>
			<Child increment={increment} />
		</div>
	);
}

export default App;
