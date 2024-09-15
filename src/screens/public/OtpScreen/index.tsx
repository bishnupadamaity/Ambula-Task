import React, { useState } from 'react'
import { Box, Image, Input, Pressable, Row, StatusBar, Text, VStack } from 'native-base'
import { useDispatch } from 'react-redux';
import { updateUser } from '~/store/slices/userSlice';
import { resetAndNavigate } from '~/utils/NavigationUtils';
import { IMAGES } from '~/assets';

const OtpScreen = () => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleLogin = ()=>{
    dispatch(updateUser({ phone: number, name: 'Ambula User0050' }));
    resetAndNavigate('OtpVerification');
  }
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1e40af'} />
      <Box flex={1} bg={'white'}>
        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
          <Image source={IMAGES.PAYMENT} style={{ width: '80%', height: '95%' }} resizeMode='contain' alt='payment' />
        </Box>
        <Box  p={5}>
          {/* welcome text  */}
          <VStack alignItems={'center'} space={2.5 } my={8}>
            <Row alignItems={'center'} space={2}>
              <Text fontSize={'xl'} fontWeight={'bold'} color={'#1e40af'}>Create</Text>
              <Text fontSize={'xl'} fontWeight={'bold'} color={'gray.600'}>Your Health Profile</Text>
            </Row>
            <Text fontSize={'xs'} w={'90%'} textAlign={'center'} fontWeight={'medium'} color={'gray.500'}>Share your health profile with doctor securely & manage, track and access your body health. </Text>
          </VStack>
          {/* number form  */}
          <Row borderWidth={1.5} my={3} borderColor={'blue.200'} rounded={'xl'} overflow={'hidden'}  >
            <Box bg={'blue.300'} alignItems={'center'} justifyContent={'center'} p={2.5}>
              <Text fontWeight={'medium'} color={'white'} fontSize={'md'} >+91</Text>
            </Box>
            <Input w={'85%'} keyboardType='number-pad' fontSize={'md'} borderWidth={0} backgroundColor={'white'} placeholder='Enter your mobile number' onChangeText={(value) => setNumber(value)} />
          </Row>
          {/* login button  */}
          <Pressable disabled={number.length !== 10} bg={number.length !== 10 ? '#697cb8' : '#1e40af'} py={4} rounded={'full'} _pressed={{opacity: 0.5}} alignItems={'center'} my={6} onPress={handleLogin}>
            <Text color={number.length!==10?'gray.400':'white'} disabled={number.length !== 10} fontWeight={'bold'} fontSize={'md'}>Login</Text>
          </Pressable>
        </Box>
      </Box>
    </>
  )
}

export default OtpScreen