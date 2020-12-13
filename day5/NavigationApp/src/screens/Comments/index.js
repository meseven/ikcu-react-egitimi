import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, RefreshControl} from 'react-native';

import constans from '../../constants';

import Item from './ListItem';

const Comments = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`${constans.API_ENDPOINT}/comments`)
			.then((response) => response.json())
			.then((users) => setUsers(users));
	}, []);

	const renderItem = ({item}) => (
		<Item comment={item} refreshing={refreshing} />
	);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			console.log('settimeout');
			setRefreshing(false);

			const random = +Math.random();
			setUsers((users) => [
				{
					id: '1231' + random,
					name: random,
					email: 'test@test.com',
					body: 'lorem ipsum',
				},
				...users,
			]);
		}, 1000);
	};

	return (
		<View>
			<FlatList
				data={users}
				renderItem={renderItem}
				keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
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
