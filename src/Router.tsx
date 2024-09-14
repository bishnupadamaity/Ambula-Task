import React from 'react'
import PrivateRoutes from './routes/private'


const Router = () => {
    return (
        <PrivateRoutes initialRouteName="SplashScreen" />
    )
}

export default Router