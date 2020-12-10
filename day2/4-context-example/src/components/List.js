import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";
import ListItem from "./ListItem";

function List() {
	const { users } = useContext(UserContext);

	console.log(users);

	return (
		<div>
			<ul style={{ padding: 0 }}>
				{users.map((user, i) => (
					<ListItem key={i} user={user} />
				))}
			</ul>
		</div>
	);
}

export default List;
