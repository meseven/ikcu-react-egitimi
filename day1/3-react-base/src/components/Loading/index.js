import React,{memo} from 'react'

function Loading({message, isActive}) {

	if(!isActive) return null;

	return (
		<div>
			{message}
		</div>
	)
}

export default memo(Loading);
