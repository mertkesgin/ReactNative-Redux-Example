import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import { COLORS } from "../constants";

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
                    backgroundColor: COLORS.colorPrimary
                },}}/>
                
        </Stack.Navigator>
    )
}

export default HomeNavigator;