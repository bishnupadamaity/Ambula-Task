import { View, Text } from 'react-native'
import React from 'react'
import PublicRoutes from './routes/public'


const Router = () => {
    return (
        <PublicRoutes initialRouteName="SplashScreen" />
    )
}

export default Router