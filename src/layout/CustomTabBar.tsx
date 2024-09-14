import { Box, HStack, Pressable, Text, VStack } from "native-base";
import AppIcon from "~/components/core/AppIcon";
import { screenWidth } from "~/utils/Scaling";

const CustomTabBar = (props: any) => {
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

                    // Icon and label settings based on route.name and isFocused
                    const getIcon = () => {
                        if (route.name === 'Home') {
                            return isFocused ? (
                                <AppIcon color='#1e3a8a' IoniconsName='home-sharp' size={24} />
                            ) : (
                                <AppIcon color='#6b7280' OcticonsName='home' size={24} />
                            );
                        } else {
                            return isFocused ? (
                                <AppIcon color='#1e3a8a' FontAwesome5Name='user-tie' size={24} />
                            ) : (
                                <AppIcon color='#6b7280' FontAwesome5Name='user' size={24} />
                            );
                        }
                    };

                    return (
                        <Pressable
                            key={index}
                            w={screenWidth * 0.24}
                            alignItems='center'
                            onPress={onPress}
                            onLongPress={onLongPress}
                        >
                            {isFocused && <Box w='100%' h={1} bg='blue.900' borderBottomRadius='xl' position='absolute' top={0} />}

                            <VStack my={1} mt={2} alignItems='center' space={0.5}>
                                <Box
                                    bg={isFocused ? 'indigo.100' : 'white'}
                                    rounded='2xl'
                                    alignItems='center'
                                    justifyContent='center'
                                    px={2}
                                    py={1}
                                >
                                    {getIcon()}
                                </Box>
                                <Text
                                    mt={-0.5}
                                    color={isFocused ? 'blue.900' : '#6b7280'}
                                    fontWeight={isFocused ? 'bold' : 'semibold'}
                                    fontSize='sm'
                                >
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

export default CustomTabBar;
