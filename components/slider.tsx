import React, { useRef, useEffect, useState } from 'react';
import { View, ScrollView, Dimensions, StyleSheet, Image, Text } from 'react-native';

const { width } = Dimensions.get('window');

const slides = [
    {
        id: 1,
        image: require('../assets/slide-1.jpeg'),
        title: 'New Listeners are Joining this week...',
    },
    {
        id: 2,
        image: require('../assets/slide-2.png'),
    },
];

export default function Slider() {
    const scrollRef = useRef<ScrollView | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % slides.length;

            if (scrollRef.current) {
                scrollRef.current.scrollTo({
                    x: nextIndex * width,
                    animated: true,
                });
                setCurrentIndex(nextIndex);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                ref={scrollRef}
                scrollEnabled={false}
            >
                {slides.map((slide) => (
                    <View key={slide.id} style={styles.slide}>
                        <Image source={slide.image} style={styles.image} />
                        {slide.id === 1 && (
                            <View style={styles.titleBox}>
                                <Text style={styles.title} numberOfLines={1}>
                                    {slide.title}
                                </Text>
                            </View>
                        )}
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 250,
    },
    slide: {
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    titleBox: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: [{ translateX: -width * 0.4 }, { translateY: -20 }],
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        width: width * 0.8,
        alignItems: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
