import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Public } from '~/screens';

const Stack = createNativeStackNavigator();

const PublicRoutes = ({initialRouteName = 'SplashScreen'}) => {
    return (
        <Stack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={Public.SplashScreen} />
        </Stack.Navigator>
    );
};

export default PublicRoutes;
