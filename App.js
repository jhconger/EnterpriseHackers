import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import Page2 from './src/screens/Page2';
import Page3 from './src/screens/Page3';
import Page4 from './src/screens/Page4';

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Page2'}>
                <Stack.Screen component={HomeScreen} name="HomeScreen" options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen component={Page2} name="Page2" options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen component={Page3} name="Page3" options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen component={Page4} name="Page4" options={{headerShown:false}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
