import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Private } from '~/screens';
import AppIcon from '~/components/core/AppIcon';
import { Box, Center, HStack, Pressable, Text } from 'native-base';
import App from 'App';

const Tab = createBottomTabNavigator();
const CustomTabBar = (props:any) => {
  const { state, descriptors, navigation } = props;
  return (
    <Box bg="white" safeAreaBottom shadow={3}>
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6} justifyContent="space-around">
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={index}
              opacity={isFocused ? 1 : 0.5}
              py={2}
              flex={1}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Center>
                <AppIcon color={isFocused ? 'blue.500' : 'gray.800'} IoniconsName={route.name === 'Home' ? 'home-sharp' : 'settings'} size={24} />
                {/* <Icon
                  as={Ionicons}
                  name={route.name === 'Home' ? 'home' : 'settings'}
                  size="lg"
                  color={isFocused ? 'blue.500' : 'gray.400'}
                /> */}
                <Text color={isFocused ? 'blue.500' : 'gray.400'} fontWeight={'semibold'} fontSize={'sm'}>
                  {route.name}
                </Text>
              </Center>
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
};
const TabLayout = () => {
  const TabArr: any = useMemo(() => [
    {
      route: 'HomeScreen',
      label: 'Home',
      activeIcon: { IoniconsName: 'home-sharp' },
      icon: { OcticonsName: 'home' },
      component:Private.HomeScreen
    },
    {
      route: 'Profile',
      label: 'Profile',
      activeIcon: { MaterialIconsName: 'dashboard' },
      icon: { MaterialIconsName: 'dashboard' },
      component: Private.Profile
      
    }
  ], [])
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