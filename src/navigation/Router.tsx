import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native"
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name = {"BottomTab"}
                    component = {BottomTabNavigator}
                    options={{
                        headerShown: false,
                    }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;