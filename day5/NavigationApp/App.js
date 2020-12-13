import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

// screens
import HomeScreen from './src/screens/Home';
import CommentsScreen from './src/screens/Comments';
import CommentDetailScreen from './src/screens/CommentDetail';

//components
import HeaderLogo from './src/components/HeaderLogo';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName="Notifications">
				<Drawer.Screen name="Home" component={HomeScreen} />
				<Drawer.Screen name="Comments" component={CommentsScreen} />
			</Drawer.Navigator>

			{/* <Tab.Navigator
				screenOptions={({route}) => ({
					tabBarIcon: ({focused, color, size}) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = 'home';
						} else if (route.name === 'Comments') {
							iconName = 'comments';
						} else if (route.name === 'Settings') {
							iconName = 'cog';
						}

						// You can return any component that you like here!
						return <Icon name={iconName} size={size} color={color} />;
					},
				})}
				tabBarOptions={{
					activeTintColor: '#333',
					inactiveTintColor: '#ddd',
				}}>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Comments" component={CommentsScreen} />
				<Tab.Screen name="Settings" component={CommentsScreen} />
			</Tab.Navigator> */}

			{/* <Stack.Navigator
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
				<Stack.Screen name="Comments" component={CommentsScreen} />
				<Stack.Screen
					name="CommentDetail"
					component={CommentDetailScreen}
					options={({route}) => ({
						title: route.params.comment.name,
						headerBackTitle: ' ',
					})}
				/>
			</Stack.Navigator> */}
		</NavigationContainer>
	);
};

export default App;
