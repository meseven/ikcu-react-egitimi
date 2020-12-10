import React, { createContext, useState } from "react";

const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
	const [lang, setLang] = useState("tr");

	const values = {
		lang,
		setLang,
	};

	return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};

export default LangContext;
