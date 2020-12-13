import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

const ListItem = ({comment}) => {
	const navigation = useNavigation();

	return (
		<TouchableOpacity
			style={styles.item}
			onPress={() => navigation.navigate('CommentDetail', {comment})}>
			<Text numberOfLines={1} style={styles.title}>
				{comment.name}
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	item: {
		backgroundColor: '#dadfe8',
		padding: 10,
		marginBottom: 4,
	},
	title: {
		fontSize: 16,
	},
});

export default ListItem;
