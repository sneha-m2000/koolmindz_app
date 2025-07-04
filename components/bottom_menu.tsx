
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface MenuItem {
    key: string;
    icon: keyof typeof Ionicons.glyphMap;
    label: string;
}

interface BottomMenuBarProps {
    style?: any;
}

const BottomMenuBar: React.FC<BottomMenuBarProps> = ({ style }) => {
    const [activeTab, setActiveTab] = useState<string>('Home');

    const menuItems: MenuItem[] = [
        { key: 'Home', icon: 'home', label: 'Home' },
        { key: 'History', icon: 'time', label: 'History' },
        { key: 'Coins', icon: 'add-circle', label: 'Coins' },
        { key: 'Support', icon: 'headset', label: 'Support' },
        { key: 'More', icon: 'menu', label: 'More' },
    ];

    const handleTabPress = (tabKey: string): void => {
        setActiveTab(tabKey);
        console.log(`${tabKey} tab pressed`);
    };

    const handleAddCoins = (): void => {
        console.log('Add Coins pressed');
    };

    return (
        <View style={[styles.bottomContainer, style]}>
            {/* Add Coins Button */}
            <TouchableOpacity style={styles.addCoinsButton} onPress={handleAddCoins} activeOpacity={0.8}>
                <View style={styles.iconTextRow}>
                    <Image source={require('../assets/star.png')} style={styles.coinIcon} />
                    <Text style={styles.addCoinsText}>Add Coins</Text>
                </View>
            </TouchableOpacity>

            {/* Bottom Menu Bar */}
            <View style={styles.bottomMenuBar}>
                {menuItems.map((item: MenuItem) => (
                    <TouchableOpacity
                        key={item.key}
                        style={styles.menuItem}
                        onPress={() => handleTabPress(item.key)}
                        activeOpacity={0.6}
                    >
                        <Ionicons name={item.icon} size={24} color={activeTab === item.key ? '#8B5CF6' : '#9CA3AF'} />
                        <Text style={[styles.menuLabel, { color: activeTab === item.key ? '#8B5CF6' : '#9CA3AF' }]}>
                            {item.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        backgroundColor: 'transparent',
        zIndex: 1000,
    },
    addCoinsButton: {
        position: 'absolute',
        bottom: 90,
        right: 20,
        backgroundColor: '#7D4CFF',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 25,
        elevation: 10,
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
    },
    coinIcon: {
        width: 24,
        height: 24,
        marginRight: 8,
        resizeMode: 'contain',
    },
    addCoinsText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    bottomMenuBar: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: -2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 20,
        marginHorizontal: 16,
        overflow: 'hidden',
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 8,
    },
    menuLabel: {
        fontSize: 12,
        marginTop: 4,
        fontWeight: '500',
    },
    iconTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export default BottomMenuBar;
