import React from 'react'
import { View, Text } from 'react-native'
export default function Forecast(props) {
    return (
    <View >
    <Text>{props.main}</Text>
    <Text>{props.description}</Text>
    <Text >Wind speed : {props.wind} m/s</Text>
    <Text >Temperature Min{props.tempMin}</Text>
    <Text >Temperature Max</Text>
    <View>
        <Text>{props.temp}</Text>
        <Text>°C</Text>
        <Text >{props.tempMin}°C</Text>
        <Text s>{props.tempMax}°C</Text>
    </View>
</View>
    );
   }