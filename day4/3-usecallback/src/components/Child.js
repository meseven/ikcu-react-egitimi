import React from "react";

function Child({ increment }) {
	console.log("RE RENDER");

	return (
		<div>
			<button onClick={increment}>increment</button>
		</div>
	);
}

export default React.memo(Child);
