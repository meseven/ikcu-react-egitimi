import React from 'react';

import {Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import HomeScreen from './src/screens/Home';
import CommentsScreen from './src/screens/Comments';
import CommentDetailScreen from './src/screens/CommentDetail';

//components
import HeaderLogo from './src/components/HeaderLogo';

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#f4511e',
					},
					headerTintColor: '#fff',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{
						headerTitle: (props) => <HeaderLogo />,
					}}
				/>
				<Stack.Screen
					name="Comments"
					component={CommentsScreen}
					options={{
						headerRight: () => (
							<Button
								onPress={() => alert('This is a button!')}
								title="Add"
								color="#fff"
							/>
						),
					}}
				/>
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
