import { View, Text, StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import { Center, Image } from 'native-base'
import { IMAGES } from '~/assets'
import { navigate, resetAndNavigate } from '~/utils/NavigationUtils'

const SplashScreen = () => {
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      resetAndNavigate('TabLayout');
    }, 1000);
    return () => clearTimeout(timeOutId);
  },[])
  return (
    <Center justifyContent={'center'} flex={1} bg={'white'}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Image source={IMAGES.FULL_LOGO} size={'2xl'} resizeMode='contain' alt='Ambula' />
    </Center>
  )
}

export default SplashScreen