import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
//bottom-tabs
import BottomTabs from './navigation/BottomTabs';

//store
import { store, persistor } from './store';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
   <NavigationContainer>
   <Stack.Navigator>
    <Stack.Screen name='bottom-tabs' component={BottomTabs} />
   </Stack.Navigator>
   </NavigationContainer>
   </PersistGate>
   </Provider>
  );
}


