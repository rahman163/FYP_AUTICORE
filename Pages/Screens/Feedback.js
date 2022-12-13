import { View, Button, Text, Alert, StyleSheet } from 'react-native'
import React from 'react'

const createTwoButtonAlert = () =>
    Alert.alert(
      "We have received your feedback",
      "Please, donate some for future inhancement",
      [
        { text: "OK", onPress: () => console.log("OK") }
      ]
    );

export default function Feedback () {
  return (
    <View style={Styles.container}>
      <Text style={Styles.Text}>“Your opinion is important to us.This way
 we can keep improving our app”</Text>
      <View style={Styles.Button}>
      <Button title={"Submit"} onPress={createTwoButtonAlert} />
      </View>
      <View>
        

      </View>
    </View>
  )
};

const Styles = StyleSheet.create ({
  container: {
      flex: 1,
      backgroundColor: '#f89def',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },
  Text: {
      width: 400,
      height: 100,
      paddingTop: 5,
      marginTop:1,
      fontSize: 21,
      //fontWeight: 'Bold',
      textAlign: 'center',
      color: '#010001',
  },

  Button: {
      width: 200,
      //height: 100,
      paddingTop: 20,
      marginTop:20,
      //backgroundColor: 'white',
      // borderTopLeftRadius: 50,
      // borderTopRightRadius: 50,
      // borderBottomRightRadius: 50,
      // borderBottomLeftRadius: 50,
  },
})