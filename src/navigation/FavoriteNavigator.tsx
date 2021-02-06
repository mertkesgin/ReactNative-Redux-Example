import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Favorites'}
                component = {FavoriteScreen}
                options={{
                headerTintColor: '#FFF',
                headerBackTitleVisible:false,
                headerTitleAlign:'center',
                headerStyle: {
                    backgroundColor: '#151c25'
                },}}/>
                
        </Stack.Navigator>
    )
}

export default HomeNavigator;