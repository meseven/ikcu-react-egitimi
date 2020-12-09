import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Loading from '../Loading';

function List() {
	const [loading, setLoading] = useState(true);
	const [name, setName] = useState('');
	const [users, setUsers] = useState([]);

	const handleOnClick = () => setUsers([{ name }, ...users]);
	const onChangeName = ({ target: { value } }) => setName(value);
	useEffect(() => setName(''), [users]);

	useEffect(() => {
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(({ data }) => setUsers(data))
			.catch((error) => console.log(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			<input value={name} onChange={onChangeName} />
			<input type="button" value="add a user" onClick={handleOnClick} />

			<Loading isActive={loading} message="Loading..." />

			<ul>
				{users.map(({ name, id }, key) => (
					<li key={key}>
						{name} ({id})
					</li>
				))}
			</ul>
		</>
	);
}

export default List;
