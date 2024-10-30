import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from './Categories'

const CategorySection = () => {
    return (
        <View >
            <View className='flex-row items-center mb-1'>
                <Text className='text-dark text-3xl font-[300]'>Welcome Back, <Text className='font-semibold'>Chris</Text> </Text>
                <Image source={require('../../assets/images/wave.png')} className='w-[30px] h-[30px]' />
            </View>
            <View className='flex-row items-center mb-7'>
                <Text className='text-dark text-sm font-[300]'>We&apos;ve got some exciting new for you! </Text>
                <Image source={require('../../assets/images/wink.png')} className='w-[25px] h-[25px]' />
            </View>

            <Categories/>
        </View>
    )
}

export default CategorySection

const styles = StyleSheet.create({})