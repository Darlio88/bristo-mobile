import { View, Text } from 'react-native'
import React, {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const Settings = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown:false,
      });
    }, [])
  return (
    <View>
      <Text>Settings</Text>
    </View>
  )
}

export default Settings