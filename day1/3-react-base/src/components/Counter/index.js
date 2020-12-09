import React, { useState, useEffect } from 'react';

import Paragraf from '../Paragraf' 

function Counter() {
	const [paragraphText, setParagraphText] = useState('lorem ipsum doler')
	const [user, setUser] = useState({ name: 'burak', age: 29 });

	const [count, setCount] = useState(0);

	const artir = () => setCount(count + 1);
	const azalt = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	// useEffect(() => {
	// 	const interval = setInterval(() => {
	// 		setCount((count) => count + 1);
	// 	}, 1000);

	// 	return () => clearInterval(interval);
	// }, []);

	useEffect(() => {
		console.log('count state değişti');

		if (count > 5) {
			setParagraphText('Bu yeni bir paragraf yazısı.')
		}
	}, [count]);

	return (
		<div>
			<h1>{count}</h1>
			<input type="button" value="-" onClick={azalt} disabled={count < 1} />
			<input type="button" value="+" onClick={artir} />
			<hr />
			<hr />
			<hr />
			Name: {user.name} <br />
			Age: {user.age} <br />
			<input
				type="button"
				value="Change user state"
				onClick={() => setUser({ ...user, name: 'Mehmet' })}
			/>

			<Paragraf text={paragraphText} />
		</div>
	);
}

export default Counter;
