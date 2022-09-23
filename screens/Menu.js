import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect,useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'

//catergories
import {catergories as allCatergories} from '../assets/utils/catergories'

//color
import {colors} from '../assets/utils/bristoColor'

//cart components
import FloatingCart from '../components/FloatingCart'

const Menu = () => {
const navigation = useNavigation()

const [catergories, setCategories] = useState(allCatergories)

useEffect(() => {
console.log(allCatergories)
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

  return (
    <View className='py-5 px-10 w-full h-full flex-1'>
      <Text 
      style={{colors:colors.black}}
      className='text-center text-lg font-extrabold mt-4 mb-4'>Menu</Text>
      {/* <FlatList 
      style={{flex:1}}
      data={catergories}
      keyExtractor={item=>item.name}
      renderItem={renderItem} /> */}

      <ScrollView className='space-y-4 pb-4' showsVerticalScrollIndicator={false}>
        {
          allCatergories.map((item, idx) =>(
            <TouchableOpacity key={idx} onPress={()=>navigation.navigate('catergory', {catergory:item.name})}>
            <View 
            key={idx} 
            className='space-y-1 shadow-sm rounded-lg overflow-hidden items-center pb-2 mb-4'>
              <Image 
              source={{uri:item.imageUrl, cache: "force-cache"}} 
              style={{width:320, height:200, resizeMode:'contain'}} />
              <Text
              style={{colors:colors.black}}
               className='text-lg capitalize font-semibold'>{item.name}</Text>
            </View>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
      <View className='absolute right-10 bottom-10 '>
      <FloatingCart />
      </View>
    </View>
  )
}

export default Menu