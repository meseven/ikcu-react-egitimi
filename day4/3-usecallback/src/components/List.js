import React from "react";

function List({ data }) {
	console.log("List RE-RENDER");
	return (
		<div>
			{data.map((i, k) => (
				<div key={k}>{i}</div>
			))}
		</div>
	);
}

export default React.memo(List);
