import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import LottieView from 'lottie-react-native';

const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate('Comments')}>
				<Text style={styles.btn}>Go to Comments</Text>
			</TouchableOpacity>

			<LottieView
				style={{width: 300}}
				source={require('../../animations/feedback-dialog.json')}
				autoPlay
				loop
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	btn: {
		fontSize: 22,
		color: 'blue',
	},
});
