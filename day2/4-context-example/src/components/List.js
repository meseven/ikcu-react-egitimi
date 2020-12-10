import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";
import ListItem from "./ListItem";

function List() {
	const { filteredUsers, users } = useContext(UserContext);

	console.log(filteredUsers);
	console.log(users);
	

	return (
		<div>
			<ul style={{ padding: 0 }}>
				{filteredUsers.map((user, i) => (
					<ListItem key={i} user={user} />
				))}
			</ul>
		</div>
	);
}

export default List;
