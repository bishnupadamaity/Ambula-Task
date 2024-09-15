import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Modal,
    PanResponder,
    StyleSheet,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    Dimensions,
} from 'react-native';


const BottomSheet = ({ onDismiss, visible, children }: any) => {
    const HEIGHT = Dimensions.get('window').height;
    const panY = useRef(new Animated.Value(HEIGHT)).current;
    const resetPositionAnim = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeAnim = Animated.timing(panY, {
        toValue: HEIGHT,
        duration: 500,
        useNativeDriver: true,
    });

    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const handleDismiss = () => closeAnim.start(onDismiss);

    useEffect(() => {
        resetPositionAnim.start();
    }, [resetPositionAnim]);

    const panResponders = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => false,
            onPanResponderMove: Animated.event([null, { dy: panY }], {
                useNativeDriver: false,
            }),
            onPanResponderRelease: (_, gs) => {
                if (gs.dy > 0 && gs.vy > 2) {
                    return handleDismiss();
                }
                return resetPositionAnim.start();
            },
        }),
    ).current;

    return (
        <Modal
            animated
            animationType="fade"
            visible={visible}
            transparent
            onRequestClose={handleDismiss}>
            <TouchableWithoutFeedback onPress={handleDismiss}>
                <View style={styles.overlay}>
                    <Animated.View
                        style={{
                            ...styles.container,
                            transform: [{ translateY: translateY }],
                        }}
                        {...panResponders.panHandlers}>
                        {/* <View style={styles.sliderIndicatorRow}>
                            <View style={styles.sliderIndicator} />
                        </View> */}
                        <ScrollView>{children}</ScrollView>
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
export default BottomSheet;

const styles = StyleSheet.create({
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        flex: 1,
        justifyContent: 'flex-end',
    },
    container: {
        backgroundColor: 'white',
        // paddingTop: 12,
        // paddingHorizontal: 12,
        overflow:'hidden',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        minHeight: 200,
    },
    sliderIndicatorRow: {
        flexDirection: 'row',
        marginBottom: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderIndicator: {
        backgroundColor: '#CECECE',
        height: 4,
        borderRadius: 3,
        width: 45,
    },
});
