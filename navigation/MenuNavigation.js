
import React, {useEffect, useLayoutEffect} from 'react'
import { useNavigation, } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


//screens
import Menu from '../screens/Menu'
import Cart from '../screens/Cart'
import Catergory from '../screens/Catergory'

const Stack = createNativeStackNavigator()

const MenuNavigation = () => {
const navigation = useNavigation()
useLayoutEffect(() => {
 navigation.setOptions({
    headerShown:false,
 })
}, [])
  return (
    <Stack.Navigator>
        <Stack.Screen name='menu' component={Menu} />
        
        <Stack.Screen name='catergory' component={Catergory} />
        <Stack.Group screenOptions={{presentation:'fullScreenModal'}} >
        <Stack.Screen name='cart' component={Cart} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default MenuNavigation