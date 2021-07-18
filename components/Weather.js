import React,{ useEffect, useState } from 'react'
import { ImageBackground, Text, StyleSheet } from 'react-native'
import Forecast from './Forcast';
 
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0,
        wind:0,
        temp: 0,
        tempMin: 'min',
        tempMax: 'max'
        }) 
        useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=3b887ec0aa70d97a208e7d99513fecd1`)
        .then((response) => response.json())
        .then((json) => {
        setForecastInfo({
        main: json.weather[0].main,
        description: json.weather[0].description,
        temp: json.main.temp,
        tempMin: json.main.temp_min,
        tempMax: json.main.temp_max,
        wind: json.wind.speed
        });
        })
        .catch((error) => {
        console.warn(error);
        });
        }
        }, [props.zipCode])
    

    return (
        
 <ImageBackground source={require('../bg2.jpg')} style={styles.backdrop}>
 <Text>Zip Code</Text>
 <Text>{props.zipCode}</Text>
 <Forecast {...forecastInfo} />
 </ImageBackground>
 
 );
}
const styles = StyleSheet.create({
    backdrop: {
    
    justifyContent : 'center',
    alignItems : 'center',
    fontSize:35,
    width: '100%',
    height: '100%'
    }, 
nextFont:{
        fontSize:30,
        margin:30,
        alignItems: 'center',
        fontWeight: "bold",
    }, 
   });