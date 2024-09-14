import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabLayout } from '~/layout';
import { Public } from '~/screens';

const Stack = createNativeStackNavigator();
const PrivateRoutes
    = ({initialRouteName = 'SplashScreen'}) => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
                <Stack.Screen name="TabLayout" component={TabLayout} />
                <Stack.Screen name='SplashScreen' component={Public.SplashScreen} />
            </Stack.Navigator>
        )
    }

export default PrivateRoutes
