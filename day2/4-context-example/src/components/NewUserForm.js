import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import UserContext from "../contexts/UserContext";

function NewUserForm() {
	const { users, setUsers } = useContext(UserContext);

	const [name, setName] = useState("");

	const handleClick = () => {
		setUsers([...users, { id: uuidv4(), name }]);
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
