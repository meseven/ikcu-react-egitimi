import React, {useState} from 'react'

function App() {
	const [count, setCount] = useState(1);

	const handleClick = () => setCount(2);

  return (
		<>
			<h1 id="count">{count}</h1>
			<input type="button" value="Click" onClick={handleClick}/>
		</>
  );
}

export default App;
