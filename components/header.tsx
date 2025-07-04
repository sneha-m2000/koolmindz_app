import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* Left section: logo + title */}
                <View style={styles.leftSection}>
                    <Image
                        source={require('../assets/logo.png')} // Update if path is different
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Kool Mindz</Text>
                </View>

                {/* Right section: coins + bell icon */}
                <View style={styles.rightSection}>
                    <View style={styles.coinSection}>
                        <Image source={require('../assets/star.png')} style={styles.coinIcon} />
                        <Text style={styles.coinText}>2000</Text>
                    </View>
                    <Ionicons name="notifications-outline" size={26} color="black" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50, // pushes it below status bar
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 8,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7c3aed', 
    },
    rightSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    coinText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    coinIcon: {
        width: 24,
        height: 24,
        marginRight: 5,
    },
});
