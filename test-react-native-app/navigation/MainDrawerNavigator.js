import React from 'react'
import { createStackNavigator, createDrawerNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import TestScreen from './../screens/TestScreen'
import ProfileScreen from './../screens/profile'
import Colors from './../constants/Colors'

const MenuIcon = (navigation) => <Icon name="menu" size={35} color='#000' style={{ padding: 10 }} onPress={() => navigation.openDrawer()} />;

const TestStack = createStackNavigator(
    {
        Test: {
            screen: TestScreen,
            navigationOptions: () => ({
                title: `Test`,
            }),
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return {
                headerLeft: MenuIcon(navigation)
            };
        }
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: { 
            screen: ProfileScreen,
            navigationOptions: () => ({
                title: `Profile`,
            }),
        }
    },
    {
        defaultNavigationOptions: ({ navigation }) => {
            return { headerLeft: MenuIcon(navigation) };
        }
    }
);

export default createDrawerNavigator(
    {
        Test: TestStack,
        Profile: ProfileStack
    },
    {
        contentOptions:
        {
            activeTintColor: Colors.primaryColor,
        }
    }
);


