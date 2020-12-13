import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import LottieView from 'lottie-react-native';

import {Button, Text} from 'native-base';

const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<View style={{paddingVertical: 40, flex: 1}}>
				<Button block onPress={() => navigation.navigate('Comments')}>
					<Text>Go to Comments</Text>
				</Button>
			</View>

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
		justifyContent: 'center',
	},
	btn: {
		fontSize: 22,
		color: 'blue',
	},
});
