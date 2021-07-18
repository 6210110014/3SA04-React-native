import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
export default function Forecast(props) {
    return (
    <View >
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text >Wind speed : {props.wind} m/s</Text>
    <Text >Temperature Min{props.tempMin}</Text>
    <Text >Temperature Max</Text>
    <View>
        <Text>{props.temp}°C</Text>
        <Text></Text>
        <Text >{props.tempMin}°C</Text>
        <Text >{props.tempMax}°C</Text>
    </View>
</View>
    );
   }
   const styles = StyleSheet.create({
    textEditor:{
        fontSize: 50,
        color:'#00fa9a',
        fontWeight: "bold",
        textAlign:'center',
    },
    temp:{
        margin:20,
        paddingTop:30,
        color:'white',
        alignItems: 'center',
        fontWeight:"bold",
        textAlign:'center',
        fontSize:80
    }
})
        