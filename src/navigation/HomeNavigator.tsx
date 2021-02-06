import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Home'}
                component = {HomeScreen}
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