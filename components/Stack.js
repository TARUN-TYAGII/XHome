import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Feather, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import Home from './Home';


const Tab = createBottomTabNavigator();

const Stack = () => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: '#000',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />

                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Home}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="search" color={color} size={size} />

                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={Home}
                options={{
                    tabBarLabel: 'User',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="users" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Notification"
                component={Home}
                options={{
                    tabBarLabel: 'Bell',
                    tabBarIcon: ({ color, size }) => (
                        <SimpleLineIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Message"
                component={Home}
                options={{
                    tabBarLabel: 'Message',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="envelope-o" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Stack