import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
import Home from './Screens/Home';
import Details from './Screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: { product: Product }
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Trending Product' }}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{ title: 'Product to be sold' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App