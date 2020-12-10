import "./App.css";

// providers
import { ThemeProvider } from "./contexts/ThemeContext";
import { LangProvider } from "./contexts/LangContext";

// components
import ChangeTheme from "./components/ChangeTheme";
import Header from "./components/Header";
import ChangeLang from "./components/ChangeLang";

function App() {
	return (
		<LangProvider>
			<ThemeProvider>
				<Header />
				<hr />
				<ChangeTheme />
				<hr />
				<ChangeLang />
			</ThemeProvider>
		</LangProvider>
	);
}

export default App;
