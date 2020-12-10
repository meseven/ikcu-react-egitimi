import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";

function FilterForm() {
	const { filter, setFilter } = useContext(UserContext);

	return (
		<div>
			<input
				placeholder="Filter..."
				value={filter}
				onChange={(e) => setFilter(e.target.value)}
			/>
		</div>
	);
}

export default FilterForm;
