import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type Listener = {
    id: string;
    name: string;
    rating: number;
    price: number;
    image: ImageSourcePropType;
};

const listeners: Listener[] = [
    { id: '1', name: 'Jewel', rating: 3.3, price: 200, image: require('../assets/avataaars.png') },
    { id: '2', name: 'Priya', rating: 3.8, price: 200, image: require('../assets/avataaars.png') },
    { id: '3', name: 'Amina', rating: 3.6, price: 200, image: require('../assets/avataaars.png') },
    { id: '4', name: 'Saira', rating: 3.2, price: 200, image: require('../assets/avataaars.png') },
    { id: '5', name: 'Lina', rating: 3.9, price: 200, image: require('../assets/avataaars.png') },
    { id: '6', name: 'Nina', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '7', name: 'Aira', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '8', name: 'Niharika', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '9', name: 'Nancy', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '9', name: 'Aami', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '9', name: 'Akkiya', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
    { id: '9', name: 'Achu', rating: 4.1, price: 200, image: require('../assets/avataaars.png') },
];

const gradientSets = [
    ['#ffb3b3', '#b3ffb3'] as const,
    ['#b3d9ff', '#e6b3ff'] as const,
    ['#ffb3e6', '#D8BFD8'] as const,
    ['#87CEEB', '#ffccff'] as const,
    ['#ffe4b5', '#add8e6'] as const,
];

export default function AvailableListeners() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const colorIndex = useRef(0);
    const nextIndex = () => (colorIndex.current + 1) % gradientSets.length;

    useEffect(() => {
        const animate = () => {
            fadeAnim.setValue(0);
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 3000,
                useNativeDriver: false,
            }).start(() => {
                colorIndex.current = nextIndex();
                animate(); // loop
            });
        };
        animate();
    });

    const renderItem = ({ item }: { item: Listener }) => {
        const currentColors = gradientSets[colorIndex.current];
        const nextColors = gradientSets[nextIndex()];

        return (
            <View style={styles.cardWrapper}>
                {/* Crossfade between current and next gradient */}
                <Animated.View style={[StyleSheet.absoluteFill, { opacity: fadeAnim }]}>
                    <LinearGradient
                        colors={nextColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
                <Animated.View
                    style={[
                        StyleSheet.absoluteFill,
                        {
                            opacity: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [1, 0],
                            }),
                        },
                    ]}
                >
                    <LinearGradient
                        colors={currentColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>

                <View style={styles.cardContent}>
                    <Image source={item.image} style={styles.avatar} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.status}>Online</Text>
                        <Text style={styles.details}>
                            ⭐ {item.rating} 🪙 {item.price}/min
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.callButton}>
                        <Text style={styles.callText}>Call</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return <View style={styles.container}>{listeners.map((item) => renderItem({ item }))}</View>;
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    cardWrapper: {
        marginBottom: 16,
        borderRadius: 14,
        overflow: 'hidden',
        height: 90,
        position: 'relative',
        backgroundColor: '#fff',
    },
    cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.85)',
    },
    avatar: {
        width: 55,
        height: 55,
        borderRadius: 30,
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    name: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    status: {
        color: 'green',
        fontSize: 14,
    },
    details: {
        fontSize: 14,
        marginTop: 4,
        color: '#333',
    },
    callButton: {
        backgroundColor: '#8358ff',
        paddingHorizontal: 20,
        paddingVertical: 8,
        borderRadius: 12,
    },
    callText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});
