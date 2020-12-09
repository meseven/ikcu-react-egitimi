import React, { useState, useEffect } from 'react';

const defaultUsers = [
	{
		name: 'Mehmet',
		age: 29,
	},
	{
		name: 'Burak',
		age: 32,
	},
];

function List() {
	const [name, setName] = useState('');
	const [users, setUsers] = useState(defaultUsers);

	const handleOnClick = () => setUsers([{ name, age: 41 }, ...users]);
	const onChangeName = ({ target: { value } }) => setName(value);
	useEffect(() => setName(''), [users]);

	return (
		<>
			<input value={name} onChange={onChangeName} />
			<input type="button" value="add a user" onClick={handleOnClick} />
			{/* {name} */}

			<ul>
				{users.map(({ name, age }, key) => (
					<li key={key}>
						{name} ({age})
					</li>
				))}
			</ul>
		</>
	);
}

export default List;
