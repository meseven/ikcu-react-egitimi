import React, { createContext, useState } from "react";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [count, setCount] = useState(2);
	const [theme, setTheme] = useState("light");

	const values = {
		theme,
		setTheme,
		count,
		setCount,
	};

	return (
		<ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
	);
};

export default ThemeContext;
