import { useState } from "react";

const defaultItems = [
	{
		name: "Item A",
	},
	{
		name: "Item B",
	},
	{
		name: "Item C",
	},
];

function Todo() {
	const [name, setName] = useState("");

	const [items, setItems] = useState(defaultItems);

	const addItem = () => {
		setItems([...items, { name }]);
	};

	return (
		<div>
			<label>
				Name <input value={name} onChange={(e) => setName(e.target.value)} />
			</label>
			<button onClick={addItem}>add</button>
			{items.map((item, key) => (
				<div key={key}>{item.name}</div>
			))}
		</div>
	);
}

export default Todo;
