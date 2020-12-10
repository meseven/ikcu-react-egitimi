import React, { useState, useEffect } from "react";

import List from "../components/List";

function Users() {
	const [loading, setLoading] = useState(true);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((data) => setUsers(data))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			<h2>Users</h2>
			{loading && <div>Loading...</div>}

			<List users={users} />
		</div>
	);
}

export default Users;
