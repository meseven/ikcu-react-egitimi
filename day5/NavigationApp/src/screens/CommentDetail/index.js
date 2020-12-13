import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CommentDetail = ({route}) => {
	const {
		comment: {name, email, body},
	} = route.params;

	return (
		<View>
			<Text>Name:{name}</Text>
			<Text>Email:{email}</Text>
			<Text>Body:{body}</Text>
		</View>
	);
};

export default CommentDetail;

const styles = StyleSheet.create({});
