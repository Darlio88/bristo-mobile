
import { View, Text, TouchableOpacity } from 'react-native'
import React, { startTransition } from 'react'
import { useSelector } from 'react-redux';
import {useNavigation} from '@react-navigation/native'

//icons
import { AntDesign } from '@expo/vector-icons';
//colors
import { colors } from '../assets/utils/bristoColor';


const FloatingCart = () => {
  const navigation = useNavigation()
    const cartList = useSelector(state => state.cart.cartList)
    const cartCount = useSelector(state=>state.cart.itemCount)
    console.log(cartCount)
    console.log(cartList)
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('cart')}} style={{elevation:3, backgroundColor:colors.black}} className='relative justify-center rounded-full items-center p-4 border'>
        <View 
        className='rounded-full m-1 p-1 '
        style={{backgroundColor:colors.successLight, borderWidth:1,borderColor:'white'}} >
            <AntDesign name="shoppingcart" size={16} color='white' />
        </View>
        <View 
        style={{backgroundColor:colors.black, width:24, height:24}} 
        className='flex justify-center items-center absolute right-0 top-1 rounded-full'>
            <Text 
            className='text-sm'
            style={{color:'white'}}>{Object.values(cartCount).filter((k)=>k>0).length}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default FloatingCart