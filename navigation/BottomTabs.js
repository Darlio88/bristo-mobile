
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


//screens
import Home from '../screens/Home'
import Settings from '../screens/Settings'
import MenuNavigation from './MenuNavigation'

//tab icons
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { colors } from '../assets/utils/bristoColor'

const Tab = createBottomTabNavigator()
const BottomTabs = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      })
    }, [])
  return (
   <Tab.Navigator 
   screenOptions={{
    tabBarShowLabel:false,
    tabBarActiveTintColor:colors.successLight,
    tabBarInactiveTintColor:colors.black,
    tabBarStyle:{
    }
   }}
   initialRouteName='home'>
    <Tab.Screen 
    options={{
      tabBarIcon:({size, color}) =>(<AntDesign name="home" size={size} color={color} />)
    }}
    name='home' component={Home} />
    <Tab.Screen 
    options={{
      tabBarIcon:({size, color}) =>(<Ionicons name="md-fast-food-outline" size={size} color={color} />)
    }}
    name='menu-home' component={MenuNavigation} />
    <Tab.Screen 
    options={{
      tabBarIcon:({size, color}) =>(<EvilIcons name="gear" size={size} color={color} />)
    }}
    name='settings' component={Settings} />
   </Tab.Navigator>
  )
}


export default BottomTabs