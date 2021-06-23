import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';

import AddEvento from './pages/CriarEvento'
import Profile from './pages/Inicial'

import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';

import Feed from './pages/Feed'

const MenuRoutes = {
    Feed:{
        name:'Feed',
        page: Feed,
        navigatorOptions:{
            title: 'Feed',
            tabBarIcon:({tintColor}) =>
                <Icon name='home' size={30} color={tintColor}/>
        }
    },
    Add:{
        name: 'AddEvento',
        page: Feed,
        navigatorOptions:{
            title: 'Add Event',
            tabBarIcon: ({tintColor}) =>
                <Icon name='plus' size={30} color={tintColor}/>
        }
    },
}


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name='Feed' component={Feed}/>
                <Screen name='AddEvent' component={AddEvento}/>
                <Screen name='Profile' component={Profile}/>
            </Navigator>
        </NavigationContainer>
    );
}

const {Navigator, Screen} = createBottomTabNavigator();
