import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from './src/screens/Home';
import CommentsScreen from './src/screens/Comments';
import CommentDetailScreen from './src/screens/CommentDetail';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Comments" component={CommentsScreen} />
				<Stack.Screen
					name="CommentDetail"
					component={CommentDetailScreen}
					options={({route}) => ({
						title: route.params.comment.name,
						headerBackTitle: ' ',
					})}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
