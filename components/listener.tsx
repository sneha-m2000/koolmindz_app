import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

const categories = [
    {
        id: 1,
        title: 'Friendly Listeners',
        icon: require('../assets/logo.png'),
    },
    {
        id: 2,
        title: 'Professional Listeners',
        icon: require('../assets/logo.png'),
    },
    {
        id: 3,
        title: 'Wellness Experts',
        icon: require('../assets/logo.png'),
    },
];

const languages = ['Hindi', 'Tamil', 'Malayalam', 'English'];

export default function ListenersSection() {
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [selectedLanguage, setSelectedLanguage] = useState('Hindi'); // Track selected language

    return (
        <View style={styles.container}>
            {/* Listeners Categories */}
            <Text style={styles.heading}>Listeners Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
                {categories.map((category) => {
                    const isSelected = selectedCategory === category.id;

                    return (
                        <TouchableOpacity
                            key={category.id}
                            onPress={() => setSelectedCategory(category.id)}
                            style={[styles.categoryCard, isSelected && styles.selectedCategoryCard]}
                        >
                            <View style={[styles.iconCircle, isSelected && styles.selectedIconCircle]}>
                                <Image source={category.icon} style={styles.icon} />
                            </View>
                            <Text
                                style={[styles.categoryText, isSelected && styles.selectedCategoryText]}
                                numberOfLines={2}
                            >
                                {category.title}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            {/* Languages */}
            <Text style={styles.heading}>Languages</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.languageScroll}>
                {languages.map((lang, index) => {
                    const isSelected = selectedLanguage === lang;
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => setSelectedLanguage(lang)}
                            style={[styles.languagePill, isSelected && styles.selectedLanguagePill]}
                        >
                            <Text style={[styles.languageText, isSelected && styles.selectedLanguageText]}>{lang}</Text>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 0,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    categoryScroll: {
        marginBottom: 20,
    },
    categoryCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 14,
        marginRight: 12,
        minWidth: 160,
    },
    selectedCategoryCard: {
        backgroundColor: '#8358ff',
    },
    iconCircle: {
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#e0e0e0',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    selectedIconCircle: {
        backgroundColor: '#fff',
    },
    icon: {
        width: 28,
        height: 28,
        borderRadius: 14,
        resizeMode: 'cover',
    },
    categoryText: {
        color: '#333',
        fontSize: 14,
        fontWeight: '500',
        flexShrink: 1,
    },
    selectedCategoryText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    languageScroll: {
        marginTop: 10,
        marginBottom: 10,
    },
    languagePill: {
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginRight: 10,
    },
    selectedLanguagePill: {
        backgroundColor: '#8358ff', 
    },
    languageText: {
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
    },
    selectedLanguageText: {
        color: '#fff', 
        fontWeight: 'bold',
    },
});
