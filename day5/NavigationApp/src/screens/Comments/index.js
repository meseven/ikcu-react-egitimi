import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';

import constans from '../../constants';

import Item from './ListItem';

const Comments = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`${constans.API_ENDPOINT}/comments`)
			.then((response) => response.json())
			.then((users) => setUsers(users));
	}, []);

	const renderItem = ({item}) => <Item comment={item} />;

	return (
		<View>
			<FlatList
				data={users}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
			/>
		</View>
	);
};

export default Comments;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
