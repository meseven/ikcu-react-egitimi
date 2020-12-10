import React, { useContext } from "react";

import UserContext from "../contexts/UserContext";

function ListItem({ user }) {
	const { users, setUsers } = useContext(UserContext);

	const handleDelete = (id) => {
		const filtered = users.filter((user) => user.id !== id);
		setUsers(filtered);
	};

	return (
		<div>
			- {user.name}{" "}
			<span
				style={{ color: "blue", cursor: "pointer" }}
				onClick={() => handleDelete(user.id)}
			>
				[sil]
			</span>
		</div>
	);
}

export default ListItem;
