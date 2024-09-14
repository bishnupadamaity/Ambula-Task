import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Box, Center, HStack, Pressable, Text, VStack } from 'native-base';
import AppIcon from '~/components/core/AppIcon';
import { Private } from '~/screens';
import App from 'App';
import { screenWidth } from '~/utils/Scaling';

const Tab = createBottomTabNavigator();
const CustomTabBar = (props: any) => {
  console.log(props)
  const { state, descriptors, navigation } = props;
  return (
    <Box bg="white" safeAreaBottom shadow={2}>
      <HStack bg="white" alignItems="center" safeAreaBottom shadow={6} justifyContent="space-around">
        {state.routes.map((route: any, index: number) => {
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
            <Pressable key={index} w={screenWidth * 0.24} alignItems={'center'}
              onPress={onPress}
              onLongPress={onLongPress}>
              {
                isFocused && <Box w={'100%'} style={{ height: 4 }} bg={'blue.900'} borderBottomRadius={'xl'} position={'absolute'} top={0} />
              }
              <VStack my={1} mt={4} alignItems={'center'} space={0.5}>
                <Box bg={isFocused ? 'indigo.100' : 'white'} rounded={'2xl'} alignItems={'center'} justifyContent={'center'} px={2} py={0.5}>
                  {
                    route.name === 'Home' ? (
                      isFocused ? (
                        <AppIcon color={isFocused ? '#1e3a8a' : '#6b7280'} IoniconsName={'home-sharp'}  size={24} />
                      ) : (
                          <AppIcon color={isFocused ? '#1e3a8a' : '#6b7280'} OcticonsName={'home'}  size={24} />
                      )
                      

                    ) : (
                        isFocused ? (
                          <AppIcon color={isFocused ? '#1e3a8a' : '#6b7280'} FontAwesome5Name={'user-tie'} size={24} />
                        ):(
                  <AppIcon color={isFocused ? '#1e3a8a' : '#6b7280'} FontAwesome5Name={'user'} size={24} />)
                        )

                  }

                </Box>
                <Text mt={-0.5} color={isFocused ? 'blue.900' : '#6b7280'} fontWeight={isFocused ? 'bold' : 'semibold'} fontSize={'sm'}>
                  {route.name}
                </Text>
              </VStack>
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
      component: Private.HomeScreen
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