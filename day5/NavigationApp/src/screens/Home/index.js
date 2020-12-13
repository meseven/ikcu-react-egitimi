import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	NativeModules,
	Platform,
} from 'react-native';

const deviceLanguage =
	Platform.OS === 'ios'
		? NativeModules.SettingsManager.settings.AppleLocale ||
		  NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
		: NativeModules.I18nManager.localeIdentifier;

console.log(deviceLanguage); //en_US

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
