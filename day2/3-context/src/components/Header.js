import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function Header() {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div>
			Header Component
			<div>Active Theme {theme}</div>
		</div>
	);
}

export default Header;
