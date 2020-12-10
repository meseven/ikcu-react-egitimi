import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";

import ChangeTheme from "./components/ChangeTheme";
import Header from "./components/Header";

function App() {
	return (
		<ThemeProvider>
			<Header />
			<hr />
			<ChangeTheme />
		</ThemeProvider>
	);
}

export default App;
