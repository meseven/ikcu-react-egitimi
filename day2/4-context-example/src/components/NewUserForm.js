import React, { useState, useContext, useEffect } from "react";

import UserContext from "../contexts/UserContext";

function NewUserForm() {
	const { users, setUsers } = useContext(UserContext);

	const [name, setName] = useState("");

	const handleClick = () => {
		setUsers([...users, { name }]);
	};

	useEffect(() => {
		setName("");
	}, [users]);

	return (
		<div>
			<input
				name="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input type="button" value="add user" onClick={handleClick} />
		</div>
	);
}

export default NewUserForm;
