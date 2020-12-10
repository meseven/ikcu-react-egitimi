import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";
import ListItem from "./ListItem";

function List() {
	const { filteredUsers } = useContext(UserContext);

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
