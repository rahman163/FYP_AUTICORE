import React, {useState} from 'react'
import { View, Text,StyleSheet, Image, TouchableOpacity, Alert} from 'react-native'

export default function AdvancedH ({ navigation }) {
  return (
    <View style = {Style.container}>
      
      <TouchableOpacity onPress={()=> navigation.navigate ('Earth')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Earth.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate ('Science')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Science.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate ('Months')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Months.png')}
          Style={{resizeMode: 'contain', width: 250, alignSelf: 'center'}}
            />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate ('Weeks')}>
        <Image style = {Style.Image1}
          source={require('../Images/Logo/Weeks.png')}
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
        marginTop:10,
    },

});