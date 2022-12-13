import { View, Image, StyleSheet, Button} from 'react-native'
import React from 'react'

export default function UserInfo ({navigation}) {
  return (
    <View style={Styles.container}>
      <Image style= {Styles.Image} source={require ('../Images/Logo/P2.png')}/> 
      <View style={Styles.Button1}>
        <Button
          title="Log In"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={Styles.Button2}>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate("Registration")}
        />
      </View> 
    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
    Image: {
      width: 300,
      height: 350,
      marginTop:70,
      marginLeft:50,
      marginRight:50,
      borderTopLeftRadius: 120,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 120,
      borderBottomLeftRadius: 40,
      backgroundColor: '#a725da',
    },
    Button1: {
        width: 250,
        height: 50,
        paddingTop: 5,
        marginTop:50,
    },
    Button2: {
        width: 250,
        height: 100,
        marginTop:5,
  },

})
