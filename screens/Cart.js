
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useLayoutEffect} from 'react'
import {useNavigation} from '@react-navigation/native'
import {useDispatch, useSelector} from 'react-redux'

import {addItem,reduceItem, removeItem} from '../features/CartSlice'


//icons
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

//colors
import {colors} from '../assets/utils/bristoColor'

const Cart = () => {
     const navigation = useNavigation()
     const dispatch = useDispatch()
     const cartList = useSelector(state=>state.cart.cartList)
     const cartCount = useSelector(state=>state.cart.itemCount)
     const cartSet = new Set(cartList)
     const uniqueCartList = Array.from(cartSet)

     
    const handleReduceFromCart = (item) =>{
        dispatch(reduceItem(item))
        console.log(cartList)
        }

    const handleAddToCart = (item) =>{
        dispatch(addItem(item))
        console.log(cartList)
        }
    const handleRemoveFromCart = (item) =>{
            dispatch(removeItem(item))
            console.log(cartList)
        }

 
    const totalCost =uniqueCartList.reduce((prev, curr)=>{
         const unitAmount= curr.price* cartCount[curr.name]
        return prev + unitAmount
       }, 0)
    
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:false,
      })
    },[])


  return (
    <View  className='flex h-full w-full '>
        {/* UPPER */}
      <View 
      style={{backgroundColor:colors.successLight}} 
      className='py-8 px-2 pt-10 w-full flex-row justify-between items-center'>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <View><AntDesign name="arrowleft" size={24} color='white' /></View>
        </TouchableOpacity>
        <View><Text className='text-lg font-bold' style={{color:colors.black}}>CART</Text></View>
        <View></View>
      </View>
      {/* CART ITEMS */}
      <ScrollView 
      className='mt-8 space-y-3'
       >
       {uniqueCartList.map((item, idx)=>(

        <View key={idx} style={{flex:1}} className='flex-row px-2 space-x-3 '>
            <View 
            className='rounded-md overflow-hidden'
            style={{flex:2, backgroundColor:colors.black}}>
                <Image 
                source={{uri:item.imageUrl,cache:"force-cache"}} 
                style={{width:160, height:120, resizeMode:'contain'}} 
                
                />
            </View>
            <View style={{flex:3}} className='justify-between py-4 mb-5'>
                <View className='flex-row justify-between items-center'>
                    <Text 
                    style={{color:colors.black}}
                     className='font-bold text-sm uppercase'>{item.name}</Text>
                    <View>
                        <TouchableOpacity onPres={()=>handleRemoveFromCart(item)}>
                        <Feather name="x" size={16} color={colors.black} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View className='flex-row justify-between items-center'>
                    <Text style={{color:colors.success}}>Ug. Shs {item.price}</Text>
                    <View  className='flex-row rounded-md overflow-hidden'>
                        <TouchableOpacity onPress={()=>handleReduceFromCart(item)}>
                        <View style={{backgroundColor:colors.successLight}}
                         className='justify-center items-center p-1 px-2'>
                            <AntDesign name="minus" size={16} color={colors.white} />
                        </View>
                        </TouchableOpacity>
                        
                        <View style={{backgroundColor:colors.black}}
                         className='justify-center items-center p-1 px-2'>
                            <Text className='text-xs' style={{color:colors.white}}>{cartCount[item.name]}</Text>
                        </View>
                        
                        <TouchableOpacity onPress={()=>handleAddToCart(item)}>
                        <View style={{backgroundColor:colors.successLight}}
                         className='justify-center items-center p-1 px-2'>
                            <AntDesign name="plus" size={16} color={colors.white} />
                        </View>
                        </TouchableOpacity>
  


                    </View>
                </View>
            </View>
        </View>
))}
{/* TOTAL */}
<View className='flex-row justify-between mt-2 px-2 items-center' >
    <Text className='text-base font-bold' style={{color:colors.black}}>TOTAL:</Text>
    <Text className='text-base font-light text-sky-500' >Ug.Shs {totalCost}</Text>
</View>


{/* CART ACTIONS */}
        <View className='flex-row items-center justify-between mb-4 mt-2 px-2'>
            <TouchableOpacity 
            className='py-2 px-3 rounded-md'
            style={{backgroundColor:colors.successLight}}>
                <Text className='uppercase font-bold' style={{color:colors.black}}>SIGN IN & CHECKOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('menu')}  className='py-2 px-3 rounded-md'
            style={{backgroundColor:colors.successLight}}>
                <Text className='uppercase font-bold' style={{color:colors.black}}>ADD MORE ITEMS</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default Cart