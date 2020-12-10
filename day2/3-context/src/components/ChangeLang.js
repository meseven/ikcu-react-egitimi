import React, { useContext } from "react";

import LangContext from "../contexts/LangContext";

function ChangeLang() {
	const { lang, setLang } = useContext(LangContext);
	return (
		<div>
			Active lang: {lang}
			<div>
				<input
					type="button"
					value={lang === "tr" ? "en" : "tr"}
					onClick={() => setLang(lang === "tr" ? "en" : "tr")}
				/>
			</div>
		</div>
	);
}

export default ChangeLang;
