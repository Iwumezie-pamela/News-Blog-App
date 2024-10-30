import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NotificationIcon } from '../navigation/TabBarIcon'
import { Ionicons } from '@expo/vector-icons'

const HomeTopView = () => {
    return (
        <View className='flex-row items-center justify-between pt-2 pb-9'>
            <Image
                source={require('../../assets/images/user_image.png')}
                className='w-[70px] h-[70px] rounded-full object-cover'
            />

            <View className="relative border border-black/5 rounded-2xl p-4">
                {/* Notification Icon */}
                <Ionicons name="notifications-outline" size={30} color="black" />

                {/* Notification Badge */}
                <View className="absolute -top-[-14px] -right-[-14px] w-4 h-4 bg-[#FF3838] rounded-full justify-center items-center">
                    <Text className="text-white text-xs">2</Text>
                </View>
            </View>
        </View>
    )
}

export default HomeTopView

const styles = StyleSheet.create({})