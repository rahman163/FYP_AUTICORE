import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'

export default function Alphabet() {
  return (
    <ScrollView style={Style.scrollView}>
      <SafeAreaView style={Style.container}>
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/1.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/2.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/3.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/4.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/5.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/6.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/7.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/8.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Alphabet/9.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
      </SafeAreaView>
    </ScrollView>
    
  );
}

const Style = StyleSheet.create ({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#ca6335",
  },
  Image1: {
      width: '100%',
      height: 86,
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      paddingTop:10,
  },
  
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },

});
