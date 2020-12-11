import React, { useEffect, useState } from "react";
import { initiateSocket, sendColor, subscribeToColor } from "./socketHook";

import "./App.css";

function App() {
	const [color, setColor] = useState("#FFFF00");

	useEffect(() => {
		initiateSocket();

		subscribeToColor((err, color) => {
			if (err) return;
			setColor(color);
		});
	}, []);

	const handleClick = () => {
		console.log(color);
		sendColor(color);
	};

	return (
		<div className="App" style={{ backgroundColor: color }}>
			<input
				type="color"
				value={color}
				onChange={(e) => setColor(e.target.value)}
			/>
			<input type="button" value="change color" onClick={handleClick} />
		</div>
	);
}

export default App;
