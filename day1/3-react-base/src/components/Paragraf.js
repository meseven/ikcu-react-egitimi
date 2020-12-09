import React,{memo} from 'react';
import PropTypes from 'prop-types';

function Paragraf({ text, color, fontSize}) {
	console.log('paragraf component re-rendered');
	
	return (
		<p style={{ color, fontSize }}>
			{text}
		</p>
	)
}

Paragraf.propTypes = {
  text: PropTypes.string.isRequired,
	color: PropTypes.string,
	fontSize: PropTypes.number
};

Paragraf.defaultProps = {
	color: '#000',
  fontSize: 32
};

export default memo(Paragraf);
