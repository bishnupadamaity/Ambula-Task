import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from './CustomTabBar';
import { Private } from '~/screens';

const Tab = createBottomTabNavigator();

const TabLayout = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false
    }} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Private.HomeScreen} />
      <Tab.Screen name="Profile" component={Private.Profile} />
    </Tab.Navigator>
  )
}

export default TabLayout