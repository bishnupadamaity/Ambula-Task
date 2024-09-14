import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Center, Image } from 'native-base'
import { IMAGES } from '~/assets'

const SplashScreen = () => {
  return (
    <Center justifyContent={'center'} flex={1} bg={'white'}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <Image source={IMAGES.FULL_LOGO} size={'2xl'} resizeMode='contain' alt='Ambula' />
    </Center>
  )
}

export default SplashScreen