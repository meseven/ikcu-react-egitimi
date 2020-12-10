import React from "react";

import ListItem from "./ListItem";

function List({ users }) {
	return (
		<ul>
			{users.map((user, i) => (
				<ListItem key={i} user={user} />
			))}
		</ul>
	);
}

export default List;
