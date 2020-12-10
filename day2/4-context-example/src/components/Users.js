import React from "react";

import List from "./List";
import NewUserForm from "./NewUserForm";
import FilterForm from "./FilterForm";

function Users() {
	return (
		<div style={{ paddingTop: 20 }}>
			<FilterForm />
			<List />
			<NewUserForm />
		</div>
	);
}

export default Users;
