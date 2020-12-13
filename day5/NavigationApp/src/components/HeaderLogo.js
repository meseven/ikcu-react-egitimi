import React from 'react';
import {Image, StyleSheet} from 'react-native';

import logo from '../assets/logo.png';

const HeaderLogo = () => {
	return <Image source={logo} style={styles.logo} />;
};

const styles = StyleSheet.create({
	logo: {width: 50, height: 40},
});

export default HeaderLogo;
