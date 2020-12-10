import React, { useState } from "react";

function MultipleFormElem() {
	const [formData, setFormData] = useState({ name: "", surname: "" });

	const handleChange = ({ target: { name, value } }) =>
		setFormData({ ...formData, [name]: value });

	const { name, surname } = formData;

	return (
		<>
			<input
				placeholder="Name"
				name="name"
				value={formData.name}
				onChange={handleChange}
			/>

			<input
				placeholder="Surname"
				name="surname"
				value={formData.surname}
				onChange={handleChange}
			/>

			<div>
				{name} {surname}
			</div>
		</>
	)
}

export default MultipleFormElem
