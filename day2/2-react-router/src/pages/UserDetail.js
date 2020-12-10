import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetail() {
	const { id } = useParams();

	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState({});

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => res.json())
			.then((data) => setUser(data))
			.catch((e) => console.log(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div style={{ padding: 10 }}>
			<h2>{user.name}</h2>
			{user.id}
		</div>
	);
}

export default UserDetail;
