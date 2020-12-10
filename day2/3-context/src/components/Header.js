import React, { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

function Header() {
	const { theme, count, setCount } = useContext(ThemeContext);

	return (
		<div>
			Header Component
			<div>Active Theme {theme}</div>
			<div>Active Count {count}</div>
			<input
				type="button"
				value={"Set count"}
				onClick={() => setCount(Math.random())}
			/>
		</div>
	);
}

export default Header;
