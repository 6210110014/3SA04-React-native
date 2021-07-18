import React from 'react';
import { NavigationContainer, StackAction } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import WeatherScreen from './screen/Weatherscreen';
import { StyleSheet, View, ImagePropTypes } from 'react-native';
const Stack = createStackNavigator();
export default function App() {
 return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Stack.Screen name="Temperature" component={ZipCodeScreen}
        options={{ headerStyle: { backgroundColor: "#FFD471" } }}/>
        <Stack.Screen name="Weather" component={WeatherScreen}
        options={{ headerStyle: { backgroundColor: "#FFD471" } }}/>
 </Stack.Navigator>
 </NavigationContainer>
 );
}
const styles = StyleSheet.create({
  container: {
     alignItems:'center',
     textAlign:'center'
  },
  colorBG:{
    backgroundColor:'orange',
  }
 });
