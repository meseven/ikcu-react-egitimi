import React from 'react';
import {StyleSheet, Text} from 'react-native';

import MapView, {Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const App = () => {
	return (
		<MapView
			style={styles.map}
			showsUserLocation
			region={{
				latitude: 40.9811925,
				longitude: 29.0280335,
				latitudeDelta: 0.015,
				longitudeDelta: 0.0121,
			}}>
			<Marker
				ref={(marker) => {
					this.marker = marker;
				}}
				coordinate={{
					latitude: 40.9811925,
					longitude: 29.0280335,
				}}
				title="Kadıköy"
				description="Lorem ipsum"
			/>
		</MapView>
	);
};

const styles = StyleSheet.create({
	map: {
		flex: 1,
	},
});

export default App;
