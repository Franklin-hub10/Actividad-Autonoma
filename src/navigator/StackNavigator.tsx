import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';


export type RootStackParams = {
    Home: undefined,
    Calculadora: undefined,
}
const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
        }}>

            <Stack.Screen name="Home" component={Screen1} />
            <Stack.Screen name="Calculadora" component={Screen2} />
        </Stack.Navigator>
    )
}

export default StackNavigator
