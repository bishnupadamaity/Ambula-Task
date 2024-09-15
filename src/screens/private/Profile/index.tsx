import React, { useState } from 'react';
import {
  FormControl,
  useDisclose,
  Box,
  Image,
  Input,
  Modal,
  Pressable,
  Row,
  ScrollView,
  Select,
  Text,
  VStack,
} from 'native-base';
import BottomSheet from '~/components/core/BottomSheet';
import DatePicker from 'react-native-date-picker';
import AppIcon from '~/components/core/AppIcon';
import { Formik } from 'formik';
import {IMAGES} from '~/assets';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '~/store';
import { saveFormData } from '~/store/slices/formSlice';
import { launchImageLibrary } from 'react-native-image-picker';
import { updateFormData, updateProfileImage } from '~/store/slices/userSlice';

const FormSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  gender: Yup.string().required('Gender is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required'),
  email: Yup.string().email('Invalid email'), // Optional email
});
const Profile = () => {
  const dispatch = useDispatch();

  // Mapping the personal info fields
  const { name, phone, profileImage } = useSelector((state: RootState) => state.user);
  const user = useSelector((state: RootState) => (console.log(state),state.user));


  // Mapping the personal info fields
  const PersonalInfo = [
    { key: 'First Name', value: user.firstName },
    { key: 'Last Name', value: user.lastName },
    { key: 'Gender', value: user.gender },
    { key: 'Date of Birth', value: new Date(user.dateOfBirth).toDateString() },
    { key: 'Email', value: user.email },
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false); 
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleLogout = () => {
    setModalVisible(false);
  };
  const handleImagePick = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0].uri;
        if (selectedImage) {
          dispatch(updateProfileImage(selectedImage)); // Store image URI in Redux
        } else {
          console.error('No image selected');
        } // Store image URI in Redux
      }
    });
  };
  return (
    <>
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
        {/* User  */}
        <Row
          bg={'violet.100'}
          px={8}
          py={4}
          alignItems={'flex-start'}
          justifyContent={'space-between'}>
          <VStack w={'65%'} alignItems={'flex-start'} mt={5}>
            <Text fontWeight={'semibold'} fontSize={'xl'} color={'gray.700'}>
              {user.name ? user.name : 'Ambula User0050'}
            </Text>
            <Text fontWeight={'normal'} fontSize={'sm'} color={'blue.500'}>
                {user.phone ? user.phone : '000 111 2222'}
            </Text>
          </VStack>
          <Box borderWidth={1} p={1} rounded={'full'} borderColor={'gray.300'}>
            <Image
                source={user?.profileImage ? {uri:user.profileImage} : {
                  uri: 'https://cdn-icons-png.flaticon.com/256/149/149071.png',
                }}
              style={{width: 100, height: 100}}
              alt="user"
              rounded={'full'}
            />
              <Pressable position={'absolute'} bottom={3} right={-10} onPress={handleImagePick}>
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
              right={4}
              onPress={onOpen}
            >
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

      {/* Log out Modal  */}
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
      <BottomSheet visible={isOpen} onDismiss={onClose}>
        <Formik
          initialValues={{
            firstName: user.firstName || '',
            lastName: user.lastName || '',
            gender: user.gender || '',
            dateOfBirth: user.dateOfBirth || '',
            email: user.email || '',
          }}
          validationSchema={FormSchema}
          onSubmit={(values) => {
            const formData = { ...values, dateOfBirth: selectedDate.toISOString() };
            dispatch(updateFormData(formData)); // Dispatch form data to Redux
            console.log(formData);
            console.log({ ...values, dateOfBirth: selectedDate.toISOString() });
            onClose();
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            setFieldValue,
          }) => (
            <VStack bg={'indigo.50'} p={5} space={3}>
              <FormControl isRequired isInvalid={!!(errors.firstName && touched.firstName)}>
                <FormControl.Label>First Name</FormControl.Label>
                <Input
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                  borderColor={'blue.200'}
                  mt={1}
                  borderWidth={1.5}
                  borderRadius={'xl'}
                  backgroundColor={'white'}
                  placeholder="Enter first name"
                />
                {errors.firstName && touched.firstName && (
                  <FormControl.ErrorMessage>
                    {errors.firstName}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={!!(errors.lastName && touched.lastName)}>
                <FormControl.Label>Last Name</FormControl.Label>
                <Input
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  borderColor={'blue.200'}
                  mt={1}
                  borderWidth={1.5}
                  borderRadius={'xl'}
                  backgroundColor={'white'}
                  placeholder="Enter last name"
                />
                {errors.lastName && touched.lastName && (
                  <FormControl.ErrorMessage>
                    {errors.lastName}
                  </FormControl.ErrorMessage>
                )}
              </FormControl>

              <FormControl isRequired isInvalid={!!(errors.gender && touched.gender)}>
                <FormControl.Label>Gender</FormControl.Label>
                <Select
                  placeholder="Select gender"
                  selectedValue={values.gender}
                  borderColor={'blue.200'}
                  mt={1}
                  borderWidth={1.5}
                  borderRadius={'xl'}
                  backgroundColor={'white'}
                  onValueChange={handleChange('gender')}>
                  <Select.Item label="Male" value="male" />
                  <Select.Item label="Female" value="female" />
                  <Select.Item label="Other" value="other" />
                </Select>
                {errors.gender && touched.gender && (
                  <FormControl.ErrorMessage>{errors.gender}</FormControl.ErrorMessage>
                )}
              </FormControl>

              {/* Date Picker Field */}
              <FormControl isRequired isInvalid={!!(errors.dateOfBirth && touched.dateOfBirth)}>
                <FormControl.Label>Date of Birth</FormControl.Label>
                <Pressable
                  borderWidth={1.5}
                  borderColor={'blue.200'}
                  mt={1}
                  p={3}
                  rounded={'xl'}
                  backgroundColor={'white'}
                  onPress={() => setIsDatePickerOpen(true)}>
                  <Text>{selectedDate ? selectedDate.toDateString() : 'Select Date of Birth'}</Text>
                </Pressable>

                {errors.dateOfBirth && touched.dateOfBirth && (
                  <FormControl.ErrorMessage>{errors.dateOfBirth}</FormControl.ErrorMessage>
                )}

                <DatePicker
                  modal
                  open={isDatePickerOpen}
                  date={selectedDate}
                  mode="date"
                  maximumDate={new Date()} // Prevent future dates
                  onConfirm={(date) => {
                    setIsDatePickerOpen(false);
                    setSelectedDate(date);
                    setFieldValue('dateOfBirth', date.toISOString()); // Set the selected date to formik
                  }}
                  onCancel={() => {
                    setIsDatePickerOpen(false);
                  }}
                />
              </FormControl>

              <FormControl isInvalid={!!(errors.email && touched.email)}>
                <FormControl.Label>Email (Optional)</FormControl.Label>
                <Input
                  placeholder="Enter email"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  borderColor={'blue.200'}
                  mt={1}
                  borderWidth={1.5}
                  borderRadius={'xl'}
                  backgroundColor={'white'}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
                )}
              </FormControl>

              <Row alignItems={'center'} justifyContent={'space-around'} my={4}>
                <Pressable w={'45%'} bg={'blue.400'} rounded={'full'} py={3} alignItems={'center'} borderWidth={1.5} borderColor={'blue.400'} _pressed={{ opacity: 0.5 }} onPress={handleSubmit as any}>
                  <Text fontSize={'md'} color={'white'} fontWeight={'bold'}>Save</Text>
                </Pressable>
                
                <Pressable w={'45%'} bg={'white'} rounded={'full'} py={3} alignItems={'center'} borderWidth={1.5} borderColor={'blue.400'} _pressed={{ opacity: 0.5 }} onPress={onClose}>
                  <Text fontSize={'md'} color={'blue.400'} fontWeight={'bold'}>Cancel</Text>
                </Pressable>
                
              </Row>
            </VStack>
          )}
        </Formik>
      </BottomSheet>
    </>
  );
};

export default Profile;
