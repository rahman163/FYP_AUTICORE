import {Image, Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

export default function Earth() {
  return (
    <ScrollView style={Style.scrollView}>
      <SafeAreaView style={Style.container}>
        <Image style = {Style.Image1}
          source={require('../Images/Advanced/Earth/1.png')}
          Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <View>
          <Text style = {Style.Texts}>Sun</Text>
        </View>
        <Image style = {Style.Image1}
          source={require('../Images/Advanced/Earth/2.png')}
          Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <View>
          <Text style = {Style.Texts}>Moon</Text>
        </View>
        <Image style = {Style.Image1}
          source={require('../Images/Advanced/Earth/3.png')}
          Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <View>
          <Text style = {Style.Texts}>Hill</Text>
        </View>
        <Image style = {Style.Image1}
          source={require('../Images/Advanced/Earth/4.png')}
          Style={{resizeMode: 'contain', alignSelf: 'center'}}
        />
        <View>
          <Text style = {Style.Texts}>Sea</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
    
  );
}

const Style = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#00ffcc",
  },
  Image1: {
    width: 300,
    height: 250,
    marginTop:30,
    marginLeft:15,
    marginRight:15,
    paddingTop:10,
  },
  Texts: {
    width: 200,
    height: 60,
    fontSize: 35,
    fontWeight: 'Bold',
    textAlign: 'center',
  },
  
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 8,
  },

});
