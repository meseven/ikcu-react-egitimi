import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.box1]}>
				<Text style={styles.text}>Box 1</Text>
			</View>
			<View style={[styles.box, styles.box2]}>
				<Text style={styles.text}>Box 2</Text>
			</View>
			<View style={[styles.box, styles.box3]}>
				<Text style={styles.text}>Box 3</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	text: {
		fontSize: 24,
		color: '#fff',
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#999',
	},
	box: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	box1: {
		backgroundColor: 'red',
	},
	box2: {
		flexDirection: 'row',
		backgroundColor: 'purple',
	},
	box3: {
		backgroundColor: 'green',
	},
});

export default App;
