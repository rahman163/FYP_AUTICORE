import {Image, Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

export default function Weeks() {
  return (
      <SafeAreaView style={Style.container}>
        <View>
          <Text style = {Style.Text1}>Monday</Text>
          <Text style = {Style.Text2}>Tuesday</Text>
          <Text style = {Style.Text3}>Wednesday</Text>
          <Text style = {Style.Text4}>Thursday</Text>
          <Text style = {Style.Text5}>Friday</Text>
          <Text style = {Style.Text6}>Saturday</Text>
          <Text style = {Style.Text7}>Sunday</Text>
        </View>
      </SafeAreaView>
    
  );
}

const Style = StyleSheet.create ({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#00ffcc",
  },
  Text1: {
    width: 360,
    height: 80,
    fontSize: 50,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#caf4fc',
  },
  Text2: {
    width: 340,
    height: 80,
    fontSize: 48,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#0db0cd',
  },
  Text3: {
    width: 320,
    height: 80,
    fontSize: 48,
    marginTop: 5,
    marginLeft: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#0fcef0',
  },
  Text4: {
    width: 300,
    height: 80,
    fontSize: 48,
    marginTop:5,
    marginLeft: 20,
    fontWeight: 'Bold',
    textAlign: 'center',
    
    backgroundColor: '#3279f3',
  },
  Text5: {
    width: 280,
    height: 80,
    fontSize: 48,
    marginTop: 5,
    marginLeft:20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#05fa6f',
  },
  Text6: {
    width: 260,
    height: 80,
    fontSize: 48,
    marginTop: 5,
    marginLeft:20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#87f708',
  },
  Text7: {
    width: 240,
    height: 80,
    fontSize: 48,
    marginTop: 5,
    marginLeft:20,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#ffec00',
  },
});
