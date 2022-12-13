import {Image, Text, View, StyleSheet, SafeAreaView, ScrollView} from 'react-native'
import React from 'react'

export default function Months() {
  return (
      <SafeAreaView style={Style.container}>
        <View>
          <Text style = {Style.Text1}>January</Text>
          <Text style = {Style.Text2}>February</Text>
          <Text style = {Style.Text3}>March</Text>
          <Text style = {Style.Text4}>April</Text>
          <Text style = {Style.Text5}>May</Text>
          <Text style = {Style.Text6}>June</Text>
          <Text style = {Style.Text7}>July</Text>
          <Text style = {Style.Text8}>August</Text>
          <Text style = {Style.Text9}>September</Text>
          <Text style = {Style.Text10}>October</Text>
          <Text style = {Style.Text11}>November</Text>
          <Text style = {Style.Text12}>December</Text>
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
    width: 300,
    height: 60,
    fontSize: 41,
    margin: 2,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#caf4fc',
  },
  Text2: {
    width: 300,
    height: 60,
    fontSize: 40,
    margin: 2,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#0db0cd',
  },
  Text3: {
    width: 300,
    height: 60,
    fontSize: 38,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#0fcef0',
  },
  Text4: {
    width: 300,
    height: 60,
    fontSize: 36,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    
    backgroundColor: '#3279f3',
  },
  Text5: {
    width: 300,
    height: 60,
    fontSize: 37,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#05fa6f',
  },
  Text6: {
    width: 300,
    height: 60,
    fontSize: 37,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#87f708',
  },
  Text7: {
    width: 300,
    height: 60,
    fontSize: 37,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#ffec00',
  },
  Text8: {
    width: 300,
    height: 60,
    fontSize: 36,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#ffb900',
  },
  Text9: {
    width: 300,
    height: 60,
    fontSize: 40,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#fb7904',
  },
  Text10: {
    width: 300,
    height: 60,
    fontSize: 41,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#ff2300',
  },
  Text11: {
    width: 300,
    height: 60,
    fontSize: 43,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#ff0085',
  },
  Text12: {
    width: 300,
    height: 60,
    fontSize: 45,
    margin: 3,
    fontWeight: 'Bold',
    textAlign: 'center',
    backgroundColor: '#a400ff',
  },
});
