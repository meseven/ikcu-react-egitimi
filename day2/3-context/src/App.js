import "./App.css";

import { ThemeProvider } from "./contexts/ThemeContext";

import ChangeTheme from "./components/ChangeTheme";

function App() {
	return (
		<ThemeProvider>
			<ChangeTheme />
		</ThemeProvider>
	);
}

export default App;
