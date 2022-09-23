import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

//icons
import { Ionicons } from '@expo/vector-icons';

//colors
import {colors} from '../assets/utils/bristoColor'

//components
import FloatingCart from '../components/FloatingCart';

const Home = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
     navigation.setOptions({
        headerShown:false,
     })
    }, [])

  return (
    <View style={{backgroundColor:colors.white}}
     className='flex-1 h-full w-full justify-around items-center px-10 pb-10'>
       
        <View className='mt-16 flex items-center justify-center relative py-3 border-2 px-10 rounded-lg' >
                <View  style={{top:-12, backgroundColor:colors.white}} 
                className=" px-3 flex-row items-center absolute ">
                    <Text style={{color:colors.black, fontStyle:'italic'}}>The</Text>
                </View>
                <Text className='text-xl font-extrabold'>Bristo </Text>
                <View 
                style={{bottom:-12, backgroundColor:colors.white}} 
                className=" px-2 flex-row items-center absolute space-x-1 ">
                    <Text style={{color:colors.black }}>Food</Text>
                    <Ionicons name="fast-food-outline" size={24} color={colors.black} />
                    <Text style={{color:colors.black }}> Drinks</Text>
                </View>
        
        </View>
        <View>
            <Text 
            style={{color:colors.black}}
            className='text-center text-base italic font-extralight'>Welcome To Our </Text>
            <Text
            style={{color:colors.black}} 
             className='mt-1 leading-5 uppercase text-center tracking-wide text-3xl font-semibold'>
                Restaurant</Text>
                <View style={{color:colors.black}} className=''>
            <Text style={{color:colors.black}} className='text-center text-xs' >
              Welcome on board to the best spiced food in town, we have the best chefs
              Get Affordable food recipes at an affordable prices
              </Text>
        </View>
        </View>
       
      <View>
        <TouchableOpacity onPress={()=>navigation.navigate('menu-home')} style={{backgroundColor:colors.secondary, elevation:1,}} 
        className='px-4 py-2 rounded-lg w-8/12'>
            <Text className='text-white font-bold text-lg uppercase'>VIEW MENU</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Home