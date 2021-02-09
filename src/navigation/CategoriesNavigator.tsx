import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import { COLORS } from "../constants";

const Stack = createStackNavigator();

const CategoriesNavigator = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name={'Categories'}
                component = {CategoriesScreen}
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

export default CategoriesNavigator;