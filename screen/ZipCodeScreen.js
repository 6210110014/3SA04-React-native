import React from 'react'
import { FlatList,View,StatusBar,Text,StyleSheet,TouchableHighlight,ImageBackground  } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const availableZipItems = [
    { place: 'Hatyai', code: '90110',pic:require('../hatyai.jpg') },
    { place: 'Trang', code: '92000' ,pic:require('../trang.jpg') },
    { place: 'Chiangmai', code: '50140',pic:require('../Chiangmai.jpg' ) },
    { place: 'Khonkaen', code: '48500' ,pic:require('../Khonkaen.jpg' )},
    { place: 'Chonburi', code: '20201',pic:require('../chonburi.jpg' ) },
    { place: 'Krabi', code: '81065',pic:require('../krabi.jpg')},
    { place: 'Satun', code: '917780',pic:require('../satun.jpg')},
   ]
   

   const ZipItem = ({place, code,navigation,pic}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})}>

    <View style={styles.zipItem}>
        <ImageBackground source={pic} style={styles.contan}>
         <Text style={styles.textEditor}>{place}</Text>
         </ImageBackground>
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
     
    </View>
     );
     }
     const styles = StyleSheet.create({
        zipItem: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center'    
    
},
contan:{
    height:100,
    width:415,
    padding:55,
    justifyContent:'center',
    alignItems:'center',
},
    textEditor:{
        fontWeight: "bold",
        alignItems: 'center',
        color:'white',
        fontSize:30,    
    },
        zipPlace: {
        flex:1,
        },
        zipCode: {
        flex:1,
        }
       });     

