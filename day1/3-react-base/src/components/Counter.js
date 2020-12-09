import React,{useState} from 'react'

function Counter() {
	const [count, setCount] = useState(0);

	const artir = () => setCount(count + 1);
	
	const azalt = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	};
	
	return (
		<div>
			<h1>{count}</h1>
			<input type="button" value="-" onClick={azalt} disabled={count < 1} />
			<input type="button" value="+" onClick={artir} />
		</div>
	)
}

export default Counter
