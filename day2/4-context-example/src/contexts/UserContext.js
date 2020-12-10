import React, { createContext, useState } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [filter, setFilter] = useState("");

	const [users, setUsers] = useState([
		{
			name: "Burak",
		},
		{
			name: "Filiz",
		},
	]);

	const values = {
		users: users.filter((data) =>
			data.name.toLocaleLowerCase().includes(filter)
		),
		setUsers,
		filter,
		setFilter,
	};

	return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContext;
