import React from 'react';
import {
  Box,
  Image,
  Modal,
  Pressable,
  Row,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import AppIcon from '~/components/core/AppIcon';
import {IMAGES} from '~/assets';

const Profile = () => {
  const PersonalInfo = [
    {key: 'Name', value: 'Bishnupada Maity'},
    {key: 'Date of Birth', value: '09-05-2001'},
    {key: 'Gender', value: 'Male'},
    {key: 'Email', value: 'bishnupdm.1@gmail.com'},
    {key: 'Phone', value: '8847866050'},
  ];
  const [modalVisible, setModalVisible] = React.useState(true);

  const handleLogout = () => {
    setModalVisible(false);
  };
  return (
    <Box flex={1} bg={'violet.100'}>
      <Box
        h={'16'}
        bg={'violet.100'}
        borderBottomWidth={1}
        borderColor={'gray.300'}
        shadow={4}
        justifyContent={'center'}
        alignItems={'flex-start'}
        px={4}>
        <Pressable
          bg={'violet.100'}
          p={2}
          _pressed={{opacity: 0.5}}
          borderWidth={1}
          rounded={'full'}
          borderColor={'gray.300'}>
          <AppIcon AntDesignName="arrowleft" size={20} color={'#1e3a8a'} />
        </Pressable>
      </Box>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bg={'violet.50'}
        flex={1}>
        <Row
          bg={'violet.100'}
          px={8}
          py={4}
          alignItems={'flex-start'}
          justifyContent={'space-between'}>
          <VStack w={'65%'} alignItems={'flex-start'} mt={5}>
            <Text fontWeight={'semibold'} fontSize={'xl'} color={'gray.700'}>
              Bishnupada Maity
            </Text>
            <Text fontWeight={'normal'} fontSize={'sm'} color={'blue.500'}>
              {'+91 8847866050'}
            </Text>
          </VStack>
          <Box borderWidth={1} p={1} rounded={'full'} borderColor={'gray.300'}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/256/149/149071.png',
              }}
              style={{width: 100, height: 100}}
              alt="user"
              rounded={'full'}
            />
            <Pressable position={'absolute'} bottom={3} right={-10}>
              <AppIcon
                MaterialIconsName="mode-edit-outline"
                size={24}
                color={'#1e3a8a'}
              />
            </Pressable>
          </Box>
        </Row>
        {/* Personal Details  */}
        <VStack p={6}>
          <Text fontWeight={'semibold'} color={'gray.500'}>
            Personal Details
          </Text>
          <VStack
            bg={'white'}
            borderWidth={1.5}
            borderColor={'blue.200'}
            p={4}
            mt={3}
            rounded={'2xl'}
            space={2}>
            {PersonalInfo.map((item, i) => (
              <VStack key={i}>
                <Text color={'gray.500'} fontSize={'xs'}>
                  {item.key}
                </Text>
                <Text>{item.value || 'N/A'}</Text>
              </VStack>
            ))}
            <Pressable
              bg={'white'}
              p={1}
              _pressed={{opacity: 0.5}}
              position={'absolute'}
              bottom={4}
              right={4}>
              {/* <AppIcon AntDesignName='arrowleft' size={20} color={'#1e3a8a'} /> */}
              <AppIcon
                MaterialIconsName="mode-edit-outline"
                size={24}
                color={'#1e3a8a'}
              />
            </Pressable>
          </VStack>
        </VStack>
        {/* coins  */}
        <Pressable
          _pressed={{opacity: 0.5}}
          py={4}
          px={4}
          mx={5}
          rounded={'full'}
          bg={'blue.100'}
          borderWidth={1.5}
          borderColor={'blue.200'}>
          <Row alignItems={'center'} justifyContent={'space-between'}>
            <Text ml={10} fontWeight={'semibold'} color={'blue.500'}>
              5 Ambula Coins
            </Text>
            <AppIcon EntypoName="chevron-right" size={22} color={'#2563eb'} />
          </Row>
          <Image
            left={0}
            top={0.5}
            position={'absolute'}
            source={IMAGES.COIN}
            style={{width: 50, height: 50}}
            alt="coin"
          />
        </Pressable>
        {/* Refer  */}
        <Pressable
          flexDir={'row'}
          _pressed={{opacity: 0.5}}
          mt={3}
          py={4}
          px={4}
          mx={5}
          rounded={'full'}
          bg={'blue.100'}
          borderWidth={1.5}
          borderColor={'blue.200'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Row alignItems={'center'} space={2}>
            <AppIcon FontAwesome5Name="users" size={16} color={'#2563eb'} />
            <Text fontWeight={'semibold'} color={'blue.500'} fontSize={'md'}>
              Refer a Friend
            </Text>
          </Row>
          <AppIcon EntypoName="chevron-right" size={22} color={'#2563eb'} />
        </Pressable>
        {/* More  */}
        <VStack px={5} py={4}>
          <Text fontSize={'sm'} color={'gray.500'}>
            MORE
          </Text>
          <Pressable
            flexDir={'row'}
            _pressed={{opacity: 0.5}}
            justifyContent={'space-between'}
            alignItems={'center'}
            bg={'white'}
            rounded={'2xl'}
            mt={2}
            p={5}>
            <Row alignItems={'center'} space={2}>
              <AppIcon
                IoniconsName="help-circle-outline"
                size={24}
                color={'#4b5563'}
              />
              <Text fontWeight={'semibold'} color={'gray.800'} fontSize={'md'}>
                Help & Support
              </Text>
            </Row>
            <AppIcon
              EntypoName="chevron-small-right"
              size={22}
              color={'#6b7280'}
            />
          </Pressable>
        </VStack>
        {/* Social Media  */}
        <VStack px={5}>
          <Text fontSize={'sm'} color={'gray.500'}>
            SOCIAL MEDIA
          </Text>
          <VStack bg={'white'} rounded={'2xl'} py={3} mt={3}>
            {[
              {
                label: 'Instagram',
                img: 'https://cdn-icons-png.flaticon.com/256/2111/2111463.png',
              },
              {
                label: 'LinkedIn',
                img: 'https://cdn-icons-png.flaticon.com/256/3536/3536505.png',
              },
              {
                label: 'Twitter (X)',
                img: 'https://cdn-icons-png.flaticon.com/256/5968/5968830.png',
              },
            ].map((item, i) => (
              <Pressable
                key={i}
                flexDir={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                py={2}
                px={5}>
                <Row alignItems={'center'} space={2.5}>
                  {/* <AppIcon IoniconsName="help-circle-outline" size={24} color={'#4b5563'} /> */}
                  <Image
                    source={{uri: item.img}}
                    style={{width: 20, height: 20}}
                    alt={item.label}
                  />
                  <Text
                    fontWeight={'medium'}
                    color={'gray.700'}
                    fontSize={'md'}>
                    {item.label}
                  </Text>
                </Row>
                <AppIcon
                  EntypoName="chevron-small-right"
                  size={22}
                  color={'#6b7280'}
                />
              </Pressable>
            ))}
          </VStack>
        </VStack>
        {/* Legal  */}
        <VStack px={5} mt={3}>
          <Text fontSize={'sm'} color={'gray.500'}>
            SOCIAL MEDIA
          </Text>
          <VStack bg={'white'} rounded={'2xl'} py={3} mt={3}>
            {[
              {
                label: 'Medical Sources',
                icon: <AppIcon MaterialCommunityIconsName='stethoscope' size={20} color={'#374151'}/>,
              },
              {
                label: 'Terms & Conditions',
                icon: <AppIcon MaterialCommunityIconsName='file-document-multiple' size={20} color={'#374151'} />,
              },
              {
                label: 'Privacy Policy',
                icon: <AppIcon MaterialCommunityIconsName='security' size={20} color={'#374151'} />,
              },
            ].map((item, i) => (
              <Pressable
                key={i}
                flexDir={'row'}
                justifyContent={'space-between'}
                alignItems={'center'}
                py={2}
                px={5}>
                <Row alignItems={'center'} space={2.5}>
                  {
                    item.icon
                  }
                  
                  <Text
                    fontWeight={'medium'}
                    color={'gray.700'}
                    fontSize={'md'}>
                    {item.label}
                  </Text>
                </Row>
                <AppIcon
                  EntypoName="chevron-small-right"
                  size={22}
                  color={'#6b7280'}
                />
              </Pressable>
            ))}
          </VStack>
        </VStack>

        {/* Logout  */}
        <Pressable
          flexDir={'row'}
          _pressed={{opacity: 0.5}}
          justifyContent={'space-between'}
          alignItems={'center'}
          bg={'white'}
          rounded={'2xl'}
          m={5}
          p={5}
          onPress={() => setModalVisible(true)}>
          <Row alignItems={'center'} space={3}>
            <AppIcon MaterialIconsName="logout" size={22} color={'#6b7280'} />
            <Text fontWeight={'semibold'} color={'gray.700'} fontSize={'md'}>
              Logout
            </Text>
          </Row>
          <AppIcon
            EntypoName="chevron-small-right"
            size={22}
            color={'#6b7280'}
          />
        </Pressable>

        {/* Footer  */}
        <VStack alignItems={'center'} my={10} space={3}>
          <Image
            source={IMAGES.FULL_LOGO}
            style={{width: 100, height: 30}}
            resizeMode="contain"
            alt="logo"
          />
          <Text fontWeight={'bold'}>App Version 1.0.0</Text>
        </VStack>
      </ScrollView>
      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size={'lg'}>
        <Modal.Content bg={'none'} shadow={0}>
          {/* <Modal.Body rounded={'full'}> */}
          <Box bg={'white'} rounded={'3xl'} p={4}>
            <VStack space={1}>
              <Row alignItems={'center'} space={2}>
                <AppIcon
                  AntDesignName="exclamationcircle"
                  size={20}
                  color={'red'}
                />
                <Text fontSize={'lg'} fontWeight={'bold'} color={'red.600'}>
                  Alert
                </Text>
              </Row>
              <Text fontSize={'sm'} color={'gray.500'}>
                Are your sure you want to Logout Ambala ?
              </Text>
            </VStack>
            <Row justifyContent={'space-around'} alignItems={'center'} mt={6}>
              <Pressable
                bg={'white'}
                _pressed={{opacity: 0.5}}
                borderWidth={1.5}
                rounded={'full'}
                borderColor={'red.600'}
                w={'45%'}
                py={3}
                alignItems={'center'}
                onPress={handleLogout}>
                <Text fontSize={'md'} color={'red.600'}>
                  Yes
                </Text>
              </Pressable>
              <Pressable
                bg={'red.600'}
                _pressed={{opacity: 0.5}}
                borderWidth={1.5}
                rounded={'full'}
                borderColor={'red.600'}
                w={'45%'}
                py={3}
                alignItems={'center'}
                onPress={() => setModalVisible(false)}>
                <Text fontSize={'md'} color={'white'}>
                  No
                </Text>
              </Pressable>
            </Row>
          </Box>
          {/* </Modal.Body> */}
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default Profile;
