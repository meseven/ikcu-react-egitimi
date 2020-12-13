import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

// import {RNCamera} from 'react-native-camera';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const App = () => {
	const [permissions, setPermissions] = useState({});

	useEffect(() => {
		PushNotificationIOS.addEventListener('notification', onRemoteNotification);
	});

	const onRemoteNotification = (notification) => {
		const isClicked = notification.getData().userInteraction === 1;

		if (isClicked) {
			// Navigate user to another screen
		} else {
			// Do something else with push notification
		}
	};

	const localNotify = () => {
		PushNotification.localNotification({
			title: 'www',
			message: 'deneme',
		});
	};

	const localScheduleNotify = () => {
		PushNotification.localNotificationSchedule({
			//... You can use all the options from localNotifications
			message: 'Deneme', // (required)
			date: new Date(Date.now() + 5000), // in 60 secs
			allowWhileIdle: false, // (optional) set notification to work while on doze, default: false
		});
	};

	return (
		<View style={styles.container}>
			<Text>push</Text>
			<Button title="click" onPress={localNotify} />
			<Button title="schedule notify" onPress={localScheduleNotify} />
			{/* <RNCamera style={styles.preview} /> */}
		</View>
	);
};

PushNotification.configure({
	// (optional) Called when Token is generated (iOS and Android)
	onRegister: function (token) {
		console.log('TOKEN:', token);
	},

	// (required) Called when a remote is received or opened, or local notification is opened
	onNotification: function (notification) {
		console.log('NOTIFICATION:', notification);

		// process the notification

		// (required) Called when a remote is received or opened, or local notification is opened
		notification.finish(PushNotificationIOS.FetchResult.NoData);
	},

	// (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
	onAction: function (notification) {
		console.log('ACTION:', notification.action);
		console.log('NOTIFICATION:', notification);

		// process the action
	},

	// (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
	onRegistrationError: function (err) {
		console.error(err.message, err);
	},

	// IOS ONLY (optional): default: all - Permissions to register.
	permissions: {
		alert: true,
		badge: true,
		sound: true,
	},

	// Should the initial notification be popped automatically
	// default: true
	popInitialNotification: true,

	/**
	 * (optional) default: true
	 * - Specified if permissions (ios) and token (android and ios) will requested or not,
	 * - if not, you must call PushNotificationsHandler.requestPermissions() later
	 * - if you are not using remote notification or do not have Firebase installed, use this:
	 *     requestPermissions: Platform.OS === 'ios'
	 */
	requestPermissions: true,
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	},
	preview: {
		flex: 1,
	},
});

export default App;
