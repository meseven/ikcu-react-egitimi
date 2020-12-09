import React, { memo } from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

function Paragraf({ text, color, fontSize }) {
	console.log(styles.name);

	return (
		<>
			<p className={styles.myParagraph} style={{ color, fontSize }}>
				{text}
			</p>

			<div className={styles.name}>Kenan</div>
		</>
	);
}

Paragraf.propTypes = {
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
	fontSize: PropTypes.number,
};

Paragraf.defaultProps = {
	color: '#000',
	fontSize: 32,
};

export default memo(Paragraf);
