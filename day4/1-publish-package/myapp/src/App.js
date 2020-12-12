import "./App.css";

import { Button, Paragraph } from "ikcu-ui";
import "ikcu-ui/dist/index.css";

function App() {
	return (
		<div className="App">
			<Button text="Click" />
			<Paragraph
				text={"lorem ipsum doler"}
				styles={{ padding: 10, margin: 10, backgroundColor: "red" }}
			/>
		</div>
	);
}

export default App;
