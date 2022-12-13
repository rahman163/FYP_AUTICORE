import React, {useState} from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

export default function IntermediateH ({ navigation }) {
  return (
    <View style = {Style.container}>
      
      <TouchableOpacity onPress={()=> navigation.navigate ('Animals')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Animals.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate ('Vegetables')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Vegetables.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate ('Fruits')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Fruits.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
            />
      </TouchableOpacity>
    </View>
  )
};

const Style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#6a7095",
        alignItems: 'center',
        //width: '100%',
        //height: '100%',
    },
    Image1: {
        width: 150,
        height: 180,
        //marginLeft: 30,
        marginTop:50,
    },

});