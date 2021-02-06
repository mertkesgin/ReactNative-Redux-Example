import * as React from 'react';
import {Image} from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNavigator from './HomeNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import FavoriteNavigator from './FavoriteNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name={"Home"}
                component = {HomeNavigator}
                options={{
                    tabBarLabel: 'Home',
                }}
            />
            <Tab.Screen 
                name={"Categories"}
                component = {CategoriesNavigator}
                options={{
                    tabBarLabel: 'Categories',
                }}
            />
            <Tab.Screen 
                name={"Favorites"}
                component = {FavoriteNavigator}
                options={{
                    tabBarLabel: 'Favorites',
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator;
