import { View, Text, StyleSheet, Image } from 'react-native'
import React, { FC } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import Carousel from 'react-native-reanimated-carousel';
import { screenHeight, screenWidth } from '~/utils/Scaling';

const AdCarousal: FC<{ adData: any }> = ({ adData }) => {

    const progressValue = useSharedValue(0);
    const baseOptions = {
        vertical: false,
        width: screenWidth,
        height: screenWidth * 0.45
    }

    return (
        <View style={{ left: -20 }}>
            <Carousel
                {...baseOptions}
                loop
                pagingEnabled
                snapEnabled
                autoPlay
                autoPlayInterval={3000}
                mode='parallax'
                data={adData}
                modeConfig={{
                    parallaxScrollingOffset: 0,
                    parallaxScrollingScale: 0.94
                }}
                renderItem={({ item }: any) => {
                    return (
                        <>
                            {/* <ScalePress style={styles.imageContainer}> */}
                                <Image source={item} style={styles.img} />
                            {/* </ScalePress> */}
                        </>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    imageContainer: {
        width: '90%',
        height: '100%',
        // backgroundColor: 'red',
        borderRadius: 20,
        overflow: 'hidden'
    },
    img: {
        width: '100%',
        height: '100%',
        maxHeight: 190,
        resizeMode: 'cover',
        borderRadius: 20,
        overflow: 'hidden'
        // backgroundColor: 'white'
    }
})

export default AdCarousal