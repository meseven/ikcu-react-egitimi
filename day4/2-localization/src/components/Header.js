import React from "react";
import { FormattedMessage } from "react-intl";

function Header() {
	return (
		<div>
			header
			<FormattedMessage id="app.header" />
			<hr />
		</div>
	);
}

export default Header;
