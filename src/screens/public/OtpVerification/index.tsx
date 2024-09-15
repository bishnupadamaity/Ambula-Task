import {
    KeyboardAvoidingView,
    ScrollView,
    Pressable,
    VStack,
    HStack,
    Image,
    Input,
    Toast,
    Text,
    Row,
    Box,
} from 'native-base';
import React, { useRef, useState } from 'react';
import {
    TextInputKeyPressEventData,
    NativeSyntheticEvent,
    TextInput,
    Platform,
} from 'react-native';
import { resetAndNavigate } from '~/utils/NavigationUtils';
import AppIcon from '~/components/core/AppIcon';
import { useSelector } from 'react-redux';
import { RootState } from '~/store';

const OtpVerification = () => {
    const user = useSelector((state: RootState) => state.user);
    const lastThreeDigits = user.phone.slice(-3); // Get the last three digits
    const maskedNumber = '*******' + lastThreeDigits;
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef<(TextInput | null)[]>([]);

    const handleChangeText = (text: string, index: number) => {
        let newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        // Move focus to the next input
        if (text && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
        if (!text && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleKeyPress = (
        e: NativeSyntheticEvent<TextInputKeyPressEventData>,
        index: number,
    ) => {
        if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handleVerify = () => {
        if (otp.every(digit => digit.length === 1)) {
            resetAndNavigate('TabLayout');
        } else {
            Toast.show({ title: 'Please enter all 6 digits', status: 'error' } as any);
        }
    };

    return (
        <KeyboardAvoidingView
            flex={1}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}>
            <ScrollView
                // contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled">
                <Box flex={1} justifyContent="center" bg={'violet.50'}>
                    <Row alignItems={'center'} p={4} bg={'violet.100'}>
                        <Pressable
                            onPress={() => {
                                resetAndNavigate('OtpScreen');
                            }}>
                            <AppIcon AntDesignName="arrowleft" size={26} color={'#6b7280'} />
                        </Pressable>
                        <Box flex={1} alignItems={'center'}>
                            <Text fontWeight={'medium'} ml={-6} color={'gray.600'}>
                                OTP Verification
                            </Text>
                        </Box>
                    </Row>
                    <Box
                        alignItems={'center'}
                        bg={'violet.100'}
                        py={4}
                        borderBottomRadius={'3xl'}>
                        <Text fontWeight={'medium'} color={'coolGray.600'}>
                            Enter the 6-digit OTP sent to your mobile number
                        </Text>
                        <Text fontWeight={'medium'} color={'blue.700'}>
                            {maskedNumber}
                        </Text>
                    </Box>
                    <Box alignItems={'center'} mt={2}>
                        <Image
                            source={{
                                uri: 'https://cdn-icons-png.flaticon.com/256/8046/8046321.png',
                            }}
                            style={{ width: 240, height: 240 }}
                            resizeMode="contain"
                            alt="security"
                        />
                    </Box>
                    <Box
                        w={'90%'}
                        alignItems={'center'}
                        alignSelf={'center'}
                        justifyContent={'center'}
                        rounded={'xl'}
                        p={4}
                        bg={'white'}
                        borderWidth={0}
                        borderColor={'blue.200'}>
                        <Text fontWeight={'medium'} color={'gray.400'} my={3}>
                            Enter OTP
                        </Text>
                        <HStack space={2} justifyContent="center">
                            {otp.map((_, index) => (
                                <Input
                                    key={index}
                                    value={otp[index]}
                                    onChangeText={text => handleChangeText(text, index)}
                                    onKeyPress={e => handleKeyPress(e, index)}
                                    ref={ref => (inputRefs.current[index] = ref)}
                                    maxLength={1}
                                    keyboardType="number-pad"
                                    textAlign="center"
                                    size="lg"
                                    width="10"
                                    variant="outline"
                                    bg="white"
                                    _focus={{
                                        borderColor: 'black', // Set the border color to black when active
                                        backgroundColor: 'transparent', // Disable active background color
                                    }}
                                />
                            ))}
                        </HStack>
                        <Pressable
                            onPress={handleVerify}
                            my={3}
                            bg={'blue.600'}
                            p={3}
                            rounded={'xl'}
                            w={'full'}
                            mt={6}
                            alignItems={'center'}>
                            <Text fontWeight={'medium'} color={'white'}>
                                Verify & Continue
                            </Text>
                        </Pressable>
                    </Box>
                    <Row
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        w={'90%'}
                        alignSelf={'center'}
                        px={4}
                        mt={1}>
                        <Text fontWeight={'medium'} color={'gray.500'}>
                            Didn't receive the OTP?
                        </Text>
                        <Pressable _pressed={{ opacity: 0.5 }}>
                            <Text fontWeight={'medium'} color={'blue.600'}>
                                Resend OTP
                            </Text>
                        </Pressable>
                    </Row>
                    <VStack
                        p={4}
                        alignItems={'center'}
                        justifyContent={'center'}
                        alignSelf={'center'}>
                        <Text color={'gray.500'} fontSize={'xs'} my={2}>
                            Approved & Authorized By
                        </Text>
                        <Row alignItems={'center'} space={4}>
                            <Image
                                source={{
                                    uri: 'https://abdm.gov.in:8081/uploads/ndhm_logo_65d00d9518.png',
                                }}
                                style={{ width: 60, height: 40 }}
                                resizeMode="contain"
                                alt="National Health Authority"
                            />
                            <Image
                                source={{
                                    uri: 'https://abdm.gov.in:8081/uploads/logo_1c71441e1d.png',
                                }}
                                style={{ width: 30, height: 40 }}
                                resizeMode="contain"
                                alt="national health authority"
                            />
                        </Row>
                    </VStack>
                </Box>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default OtpVerification;
