import "./App.css";

import { useEffect } from "react";

import * as Sentry from "@sentry/react";

console.log(Sentry);

function App() {
	useEffect(() => {
		try {
			throw new Error();
		} catch (e) {
			// You can get eventId either as the synchronous return value, or via the callback
			var eventId = Sentry.captureException(e, function (sendErr, eventId) {
				// This callback fires once the report has been sent to Sentry
				if (sendErr) {
					console.error("Failed to send captured exception to Sentry");
				} else {
					console.log("Captured exception and send to Sentry successfully");
				}
			});
		}
	}, []);

	return <div className="App"></div>;
}

export default App;
