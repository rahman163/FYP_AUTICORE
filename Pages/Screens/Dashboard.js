import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'

export default function Dashboard ({ navigation }) {
  return (
    <View style = {Styles.container}>
      <Image style= {Styles.Image} source={require ('../Images/Logo/P2.png')}/>
      
        <View style = {Styles.Button1}>
            <Button
                title="Basic"
                color="#35afca"
                onPress={() => navigation.navigate('BasicH')}
            />
        </View>
        <View  style = {Styles.Button2}>
            <Button
                title="Intermediate"
                color="#39c674"
                onPress={() => navigation.navigate('IntermediateH')}
            />
        </View>
        <View style = {Styles.Button3}>
            <Button
                title="Advanced"
                color="#e916af"
                onPress={() => navigation.navigate('AdvancedH')}
            />
        </View>
        
    <View style={Styles.ButtonTogether}>
        <Button
          title="Audio"
          color="#05fa38"
          onPress={() => navigation.navigate('Music')}
        />
        <Text>       </Text>
        <Button
          title="Video"
          color="#0aaff5"
          onPress={() => navigation.navigate('Videos')}
        />
      </View>

    </View>
  )
}

const Styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#6a7095",
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    Image: {
        width: 150,
        height: 200,
        marginTop:50,
    },
    Button1: {
        paddingTop: 40,
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 10,  
    },
      Button2: {
        paddingTop: 40,
        marginTop:5,
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 10,
      },

      Button3: {
        paddingTop: 40,
        marginTop:5,
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 10,
      },
      Button4: {
        paddingTop: 50,
        marginTop:5,
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 10,
        marginLeft: 200,
      },
      Button5: {
        paddingVertical: 30,
        paddingHorizontal: 40,
        borderRadius: 10,
        elevation: 10,
        marginRight: 200,
        marginBottom: 10,
      },

      ButtonTogether: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 40,
        marginTop:20,
        paddingVertical: 30,
        paddingHorizontal: 30,
        borderRadius: 5,
        elevation: 5,
        width: 200,
        height: 150,
      },
})