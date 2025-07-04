import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Header from '../components/header';
import Slider from '../components/slider';
import ListenersSection from '../components/listener';
import AvailableListeners from '../components/available_listener';
import BottomTab from '../components/bottom_menu';

export default function App() {
    return (
        <View style={styles.container}>
            {/* Scrollable Content */}
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                stickyHeaderIndices={[0]} // This makes the first child (Header) sticky
                showsVerticalScrollIndicator={false}
            >
                <Header />
                <Slider />
                <ListenersSection />
                <AvailableListeners />
            </ScrollView>

            {/* Fixed Bottom Menu - OUTSIDE ScrollView */}
            <BottomTab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingBottom: 120, // Space for bottom menu (adjust if needed)
    },
});