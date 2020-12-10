import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";
import LangContext from "../contexts/LangContext";

function Header() {
	const { theme, count, setCount } = useContext(ThemeContext);
	const { lang } = useContext(LangContext);

	return (
		<div>
			Header Component
			<div>Active Theme: {theme}</div>
			<div>Active Count: {count}</div>
			<div>Active Lang: {lang}</div>
			<input
				type="button"
				value={"Set count"}
				onClick={() => setCount(Math.random())}
			/>
		</div>
	);
}

export default Header;
