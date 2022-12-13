import { StatusBar } from 'expo-status-bar';
import { View, Image, StyleSheet, Button} from 'react-native'
import React, { useEffect } from 'react'

export default function LogOut({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
      }, []);
  return (
    <View style={Styles.container}>
      <Image style= {Styles.Image} source={require ('../Images/Logo/P2.png')}/>
    </View>
  );
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: 'blue',
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
        borderTopLeftRadius: 40,
        borderTopRightRadius: 120,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 120,
        backgroundColor: '#53aca9',
    },

})
