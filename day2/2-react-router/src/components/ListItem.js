import React from "react";
import { Link } from "react-router-dom";

function ListItem({ user }) {
	return (
		<li>
			<Link to={`/users/${user.id}`}>{user.name}</Link>
		</li>
	);
}

export default ListItem;
