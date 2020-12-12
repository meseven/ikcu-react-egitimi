import "./App.css";

import { useState, useCallback, useMemo } from "react";

import Child from "./components/Child";
import List from "./components/List";

function App() {
	const [count, setCounter] = useState(0);

	const increment = useCallback(() => {
		setCounter((c) => c + 1);
	}, [setCounter]);

	const data = useMemo(() => {
		return ["one", "two", "three"];
	}, []);

	return (
		<div className="App">
			<h1>{count}</h1>
			<Child increment={increment} />

			<hr />
			<List data={data} />
		</div>
	);
}

export default App;
