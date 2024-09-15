import { View, Text } from 'react-native'
import React from 'react'
import { Box, Image, Row } from 'native-base'
import { IMAGES } from '~/assets'
import AppIcon from './core/AppIcon'

const Header = () => {
  return (
    <Box bg={'violet.50'} p={4}>
      <Row justifyContent={'space-between'} alignItems={'center'} >
        <Image source={IMAGES.FULL_LOGO} style={{ width: 100, height: 30 }} resizeMode='contain' alt='logo' />
        <Row alignItems={'center'} space={2}>
          <Image source={IMAGES.COIN} style={{ width: 26, height: 26 }} alt='coin' />
          <AppIcon MaterialCommunityIconsName='bell-ring-outline' size={26} color={'#1e40af'} />
        </Row>

      </Row>

    </Box>
  )
}

export default Header