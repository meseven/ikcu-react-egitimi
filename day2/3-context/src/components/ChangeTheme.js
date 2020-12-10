import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function ChangeTheme() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div>
			Active theme: {theme}
			<div>
				<input
					type="button"
					value={theme === "light" ? "dark" : "light"}
					onClick={() => setTheme(theme === "light" ? "dark" : "light")}
				/>
			</div>
		</div>
	);
}

export default ChangeTheme;
