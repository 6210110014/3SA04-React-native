import React from 'react'
import { FlatList,View,StatusBar,Text,StyleSheet,TouchableHighlight  } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const availableZipItems = [
    { place: 'Hatyai', code: '90110',pic:require('../hatyai.jpg') },
    { place: 'Trang', code: '92000' ,pic:require('../trang.jpg') },
    { place: 'Chiangmai', code: '50000',pic:require('../Chiangmai.jpg' ) },
    { place: 'Khonkaen', code: '40000' ,pic:require('../Khonkaen.jpg' )},
    { place: 'Chonburi', code: '20000',pic:require('../chonburi.jpg' ) },
    { place: 'Krabi', code: '81000',pic:require('../krabi.jpg')},
    { place: 'Satun', code: '91000',pic:require('../satun.jpg')},
   ]
   

   const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code})}>
    <View>
    <Text>{place}</Text>
    <Text >{code}</Text>
    </View>
    </TouchableHighlight>
    )
   

    const _keyExtractor = item => item.code
    export default function ZipCodeScreen(){
     const navigation = useNavigation()
     return (
     <View> <FlatList
     data={availableZipItems}
     keyExtractor={_keyExtractor}
     renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
     />
     <StatusBar style="auto" />
    </View>
     );
     }
     

