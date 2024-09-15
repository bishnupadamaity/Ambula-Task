import {StatusBar} from 'react-native';
import React from 'react';
import {Box, Image, Pressable, Row, ScrollView, Text, VStack} from 'native-base';
import Header from '~/components/Header';
import AppIcon from '~/components/core/AppIcon';
import AdCarousal from '~/components/AdCarousal';
import { CarouselData } from '~/utils/DummyData';

const Home = () => {
  const AbhaServicesArr = [
    {
      firstLabel: 'Create',
      secondLabel: 'ABHA',
      icon: (
        <AppIcon
          FontAwesomeName="credit-card-alt"
          size={20}
          color={'#60a5fa'}
        />
      ),
    },
    {
      firstLabel: 'My Health',
      secondLabel: 'Records',
      icon: (
        <AppIcon IoniconsName="document-text" size={22} color={'#60a5fa'} />
      ),
    },
    {
      firstLabel: 'Scan for',
      secondLabel: 'OPD Booking',
      icon: (
        <AppIcon
          MaterialCommunityIconsName="qrcode-scan"
          size={20}
          color={'#60a5fa'}
        />
      ),
    },
  ];
  const OurServices = [{
    firstLabel: 'Book Lab',
    secondLabel: 'Test',
    icon: (
      <AppIcon
        FontAwesomeName="credit-card-alt"
        size={20}
        color={'#60a5fa'}
      />
    ),
    offer: '30'
  },
  {
    firstLabel: 'Health',
    secondLabel: 'Insurance',
    icon: (
      <AppIcon IoniconsName="document-text" size={22} color={'#60a5fa'} />
    ),
    offer: null,
  },
  {
    firstLabel: 'Order',
    secondLabel: 'Medicine',
    icon: (
      <AppIcon
        MaterialCommunityIconsName="qrcode-scan"
        size={20}
        color={'#60a5fa'}
      />
    ),
    offer: null,
    },];
  const HealthMonitoring = [{
    firstLabel: 'Monitor',
    secondLabel: 'Blood Glucose',
    icon: (
      <AppIcon
        FontAwesomeName="heart"
        size={22}
        color={'#60a5fa'}
      />
    ),
    offer: '30'
  },
  {
    firstLabel: 'Monitor',
    secondLabel: 'Blood Pressure',
    icon: (
      <AppIcon FontAwesome5Name="dna" size={22} color={'#60a5fa'} />
    ),
    offer: null,
  },
  {
    firstLabel: 'Check & Track',
    secondLabel: 'BMI',
    icon: (
      <AppIcon
        FontAwesome5Name="weight"
        size={22}
        color={'#60a5fa'}
      />
    ),
    offer: null,
  },]
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={'#1e40af'} />
      <Header />
      <ScrollView bg={'violet.50'} flex={1}>
        {/* Abha services */}
        <Box bg={'violet.50'} p={3} >
          <VStack
            rounded={'2xl'}
            borderWidth={1}
            borderColor={'blue.100'}
            bg={'white'}
            p={3}>
            <Text fontSize={'md'} color={'gray.600'} fontWeight={'medium'}>
              ABHA Services
            </Text>
            <Row alignItems={'center'} justifyContent={'space-around'} mt={3}>
              {AbhaServicesArr.map((item: any, index: number) => (
                <Pressable _pressed={{opacity: 0.5}} key={index} w={'30%'}>
                  <VStack alignItems={'center'}>
                    <Box
                      w={'55%'}
                      px={2.5}
                      py={3.5}
                      alignItems={'center'}
                      justifyContent={'center'}
                      borderWidth={1.5}
                      rounded={'xl'}
                      borderColor={'violet.50'}>
                      {item.icon}
                    </Box>
                    <VStack mt={3} space={0}>
                      <Text
                        textAlign={'center'}
                        fontSize={'xs'}
                        fontWeight={'normal'}
                        color={'gray.600'}>
                        {item.firstLabel}
                      </Text>
                      <Text
                        mt={-0.5}
                        textAlign={'center'}
                        fontSize={'xs'}
                        fontWeight={'normal'}
                        color={'gray.600'}>
                        {item.secondLabel}
                      </Text>
                    </VStack>
                  </VStack>
                </Pressable>
              ))}
            </Row>
          </VStack>
        </Box>
        {/* Our Services  */}
        <Box bg={'#fbfaff'} p={5}>
          <Text fontWeight={'semibold'} color={'gray.700'} fontSize={'md'} >Our Services</Text>
          <Box  mt={4}>
            <VStack
              rounded={'3xl'}
              borderWidth={1}
              borderColor={'blue.100'}
              bg={'white'}
              p={3}>
              <Row alignItems={'center'} justifyContent={'space-around'} mt={3}>
                {OurServices.map((item: any, index: number) => (
                  <Pressable _pressed={{ opacity: 0.5 }} key={index} w={'30%'}>
                    <VStack alignItems={'center'}>
                      <Box
                        w={'55%'}
                        px={2.5}
                        py={3.5}
                        alignItems={'center'}
                        justifyContent={'center'}
                        borderWidth={1.5}
                        rounded={'xl'}
                        borderColor={'violet.50'}>
                        {item.icon}
                        
                      </Box>
                      {
                        item.offer ? <Box bg={'emerald.300'} rounded={'xl'} w={'80%'} px={1} py={1} mt={-2.5} alignItems={'center'}>
                          <Text fontWeight={'semibold'} color={'emerald.600'} fontSize={'2xs'} >UPTO {item.offer}% OFF</Text>
                        </Box>:null
                      }
                      <VStack mt={3} space={0}>
                        <Text
                          textAlign={'center'}
                          fontSize={'xs'}
                          fontWeight={'normal'}
                          color={'gray.600'}>
                          {item.firstLabel}
                        </Text>
                        <Text
                          mt={-0.5}
                          textAlign={'center'}
                          fontSize={'xs'}
                          fontWeight={'normal'}
                          color={'gray.600'}>
                          {item.secondLabel}
                        </Text>
                      </VStack>
                    </VStack>
                  </Pressable>
                ))}
              </Row>
            </VStack>
          </Box>
        </Box>
        {/* Carousal  */}
        <Box bg={'violet.50'} py={2} px={5}>
          <AdCarousal adData={CarouselData} />
        </Box>
        {/* Health Monitoring  */}
        <Box bg={'#fbfaff'} p={5}>
          <Text fontWeight={'semibold'} color={'gray.700'} fontSize={'md'} >Health Monitoring</Text>
          <Box mt={4}>
            <VStack
              rounded={'3xl'}
              borderWidth={1}
              borderColor={'blue.100'}
              bg={'white'}
              p={3}>
              <Row alignItems={'center'} justifyContent={'space-around'} mt={3}>
                {HealthMonitoring.map((item: any, index: number) => (
                  <Pressable _pressed={{ opacity: 0.5 }} key={index} w={'30%'}>
                    <VStack alignItems={'center'}>
                      <Box
                        w={'55%'}
                        px={2.5}
                        py={3.5}
                        alignItems={'center'}
                        justifyContent={'center'}
                        // borderWidth={1.5}
                        rounded={'xl'}
                        borderColor={'violet.50'}
                      >
                        {item.icon}

                      </Box>
                      <VStack mt={3} space={0}>
                        <Text
                          textAlign={'center'}
                          fontSize={'xs'}
                          fontWeight={'normal'}
                          color={'gray.600'}>
                          {item.firstLabel}
                        </Text>
                        <Text
                          mt={-0.5}
                          textAlign={'center'}
                          fontSize={'xs'}
                          fontWeight={'normal'}
                          color={'gray.600'}>
                          {item.secondLabel}
                        </Text>
                      </VStack>
                    </VStack>
                  </Pressable>
                ))}
              </Row>
            </VStack>
          </Box>
        </Box>
        {/* Carousal  */}
        <Box bg={'violet.50'} py={2} px={5}>
          <AdCarousal adData={CarouselData} />
        </Box>

        {/* Approved by */}
        <VStack alignItems={'center'} bg={'#fbfaff'} mt={4} py={6}>
          <Text my={3} fontSize={'xs'} color={'gray.400'}>APPROVED BY</Text>

        <Row alignItems={'center'} space={4}>
            <Image source={{ uri: 'https://abdm.gov.in:8081/uploads/ndhm_logo_65d00d9518.png'}} style={{width: 100, height: 40}} resizeMode='contain' alt='National Health Authority'/>
            <Image source={{ uri: 'https://abdm.gov.in:8081/uploads/logo_1c71441e1d.png'}} style={{width: 40, height: 40}} alt='national health authority'/>
        </Row>
        </VStack>

      

        {/* Quote Line  */}
        <VStack bg={'#fbfaff'} alignItems={'center'} py={8} space={0.5}>
          <Text fontWeight={'medium'} color={'gray.500'}>Your personal health data is 100% safe and secure.</Text>
          <Row alignItems={'center'}>
            <Text fontWeight={'medium'} color={'gray.600'}>View</Text>
            <Text fontWeight={'medium'} mx={1} color={'red.500'}>Terms & Conditions</Text>
            <Text fontWeight={'medium'} color={'gray.600'}>and</Text>
            <Text fontWeight={'medium'} mx={1} color={'red.500'}>Privacy Policy</Text>
          </Row>

        </VStack>
      </ScrollView>
    </>
  );
};

export default Home;
