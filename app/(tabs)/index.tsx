import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeTopView from '@/components/home/HomeTopView'
import { StatusBar } from 'expo-status-bar'
import CategorySection from '@/components/home/CategorySection'

const HomeScreen = () => {
    return (
        <ScrollView className="flex-1 py-2 px-6 bg-white" contentContainerStyle={{ paddingBottom: 20 }}>
            <StatusBar style="dark" />
            <SafeAreaView />
            <HomeTopView />
            <CategorySection />
        </ScrollView>
    )
}

export default HomeScreen
