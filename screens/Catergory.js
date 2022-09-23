import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect,useEffect, useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useDispatch } from 'react-redux'


//action
import {addItem} from '../features/CartSlice'

//catergories
import {bristoMenu} from '../assets/utils/bristoMenu'

//color
import {colors} from '../assets/utils/bristoColor'

//floating cart

import FloatingCart from '../components/FloatingCart'


const Menu = () => {
  const dispatch = useDispatch()
const navigation = useNavigation()

const {catergory} = useRoute().params
console.log(catergory)
const [catergoryList, setCategoryList] = useState([])

useEffect(() => {
setCategoryList(bristoMenu.filter((item)=>item.catergory===catergory))
}, [])


useLayoutEffect(() => {
 navigation.setOptions({
    headerShown:false,
 })
}, [])
// const renderItem =({item}) =>(
//   <View style={{width:240}} className=''>
//     <Image source={{uri:item.imageUrl, cache: "force-cache"}} style={{width:240, height:240, resizeMode:'contain'}} />
//     <Text>{item.name}</Text>
//   </View>
// )

if(catergoryList.length===0) return <View><Text>no items</Text></View>

const handleAddCart = (item) =>{
dispatch(addItem(item))
}


  return (
    <View className='py-5 px-10 w-full h-full flex-1'>
      <Text 
      style={{colors:colors.black}}
      className='text-center text-lg mt-4 font-extrabold mb-4 capitalize'>{catergory}</Text>
      {/* <FlatList 
      style={{flex:1}}
      data={catergories}
      keyExtractor={item=>item.name}
      renderItem={renderItem} /> */}

      <ScrollView className='space-y-4 pb-4' showsVerticalScrollIndicator={false}>
        { catergoryList.length >0 &&
          catergoryList.map((item, idx) =>(
            <View 
            key={idx}
              className='space-y-1 shadow-sm rounded-lg overflow-hidden items-center pb-2 mb-4'>
              <Image 
                source={{uri:item.imageUrl, cache: "force-cache"}} 
                style={{width:320, height:200, resizeMode:'contain'}} />
    <View className='flex-row items-center justify-between w-full px-4'>
        <View>
            <Text
            style={{colors:colors.black}}
            className='text-lg capitalize font-semibold'>{item.name}</Text>
            <Text
            className='text-sm capitalize text-sky-500 font-semibold'>Ug.Shs {item.price}</Text>
        </View>
        <View>
          <TouchableOpacity 
          onPress={()=>handleAddCart(item)}
          className='px-4 py-2 rounded-lg '
          style={{backgroundColor:colors.successLight, elevation:3}}>
            <Text style={{color:colors.white}}>ADD</Text>
          </TouchableOpacity>
        </View>
        </View>
    </View>
           
          ))
        }
        
      </ScrollView>
      <View className='absolute right-4 bottom-16 '>
      <FloatingCart />
      </View>
    </View>
  )
}

export default Menu