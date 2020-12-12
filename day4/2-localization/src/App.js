import "./App.css";
import { useState } from "react";
import {
	IntlProvider,
	FormattedMessage,
	FormattedDate,
	FormattedRelativeTime,
} from "react-intl";
import { allMessages } from "./messages";

import Header from "./components/Header";

function App() {
	const lsLocale = localStorage.getItem("locale");
	const defaultLocale = lsLocale ? lsLocale : navigator.language;
	
	const [locale, setLocale] = useState(defaultLocale);

	const changeLocale = (locale) => {
		setLocale(locale);
		localStorage.setItem("locale", locale);
	};

	return (
		<IntlProvider locale={locale} messages={allMessages[locale]}>
			<div className="App">
				<button onClick={() => changeLocale("tr-TR")}>tr</button>
				<button onClick={() => changeLocale("en-US")}>en</button>
				<button onClick={() => changeLocale("de-DE")}>de</button>

				<Header />

				<div>
					<FormattedMessage id="app.title" />
				</div>

				<p>
					<FormattedMessage id="app.description" values={{ count: 3 }} />
				</p>

				<hr />
				<FormattedDate dateStyle="full" />
				<hr />

				<FormattedRelativeTime numeric="auto" updateIntervalInSeconds={1} />
			</div>
		</IntlProvider>
	);
}

export default App;
