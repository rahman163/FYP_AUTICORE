import {Image, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

export default function Color() {
  return (
    <ScrollView style={Style.scrollView}>
      <SafeAreaView style={Style.container}>
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/1.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/2.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/3.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/4.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/1.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/2.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/3.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/4.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/1.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/2.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/3.png')}
                Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <Image style = {Style.Image1}
                source={require('../Images/Basic/Color/4.png')}
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
      backgroundColor: "#ace7fc",
  },
  Image1: {
      width: 400,
      height: 150,
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
