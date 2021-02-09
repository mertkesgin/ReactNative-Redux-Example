import * as React from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from './HomeNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import FavoriteNavigator from './FavoriteNavigator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                    activeTintColor: COLORS.colorPrimary,
                    inactiveTintColor: COLORS.gray,
            }}>
            <Tab.Screen 
                name={"Home"}
                component = {HomeNavigator}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color }) => (
                        <AntDesign color={color} name="home" size={25} />
                    ),
                }}
            />
            <Tab.Screen 
                name={"Categories"}
                component = {CategoriesNavigator}
                options={{
                    tabBarLabel: 'Categories',
                    tabBarIcon: ({color }) => (
                        <Foundation color={color} name="thumbnails" size={25} />
                    ),
                }}
            />
            <Tab.Screen 
                name={"Favorites"}
                component = {FavoriteNavigator}
                options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({color }) => (
                        <Feather color={color} name="bookmark" size={25} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
