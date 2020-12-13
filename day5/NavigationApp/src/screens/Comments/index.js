import React, {useState, useEffect} from 'react';
import {
	StyleSheet,
	TouchableOpacity,
	View,
	FlatList,
	RefreshControl,
	Text,
} from 'react-native';

import Modal, {
	ModalContent,
	ModalTitle,
	ModalFooter,
	ModalButton,
	SlideAnimation,
} from 'react-native-modals';
import Icon from 'react-native-vector-icons/FontAwesome';
import constans from '../../constants';
import Item from './ListItem';

const Comments = ({navigation}) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch(`${constans.API_ENDPOINT}/comments`)
			.then((response) => response.json())
			.then((users) => setUsers(users));
	}, []);

	React.useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity
					style={{marginRight: 10}}
					onPress={() => setModalVisible(true)}>
					<Icon name="plus" size={28} color="#fff" />
				</TouchableOpacity>
			),
		});
	}, [navigation]);

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

			<Modal
				visible={modalVisible}
				modalAnimation={
					new SlideAnimation({
						slideFrom: 'bottom',
					})
				}
				onTouchOutside={() => setModalVisible(false)}
				width={0.8}
				modalTitle={<ModalTitle title="Modal Title" />}
				swipeDirection={['up', 'down']} // can be string or an array
				swipeThreshold={200} // default 100
				onSwipeOut={(event) => {
					setModalVisible(false);
				}}
				footer={
					<ModalFooter>
						<ModalButton text="CANCEL" onPress={() => {}} />
						<ModalButton text="OK" onPress={() => {}} />
					</ModalFooter>
				}>
				<ModalContent>
					<Text>selam</Text>
				</ModalContent>
			</Modal>
		</View>
	);
};

export default Comments;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
