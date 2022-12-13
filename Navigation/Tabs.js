import React from 'react'
import { StyleSheet,View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../Pages/Screens/Dashboard';
import Feedback from '../Pages/Screens/Feedback';
import Donation from '../Pages/Screens/Donation';
import LogOut from '../Pages/Screens/LogOut';

const Tab = createBottomTabNavigator();

export default function Tabs () {
  return (
    <Tab.Navigator>
        <Tab.Screen 
          name = "Explore" 
          component = {Dashboard} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require ('../Pages/Images/Icons/Home.png')}
                  resizeMode = "contain"
                  style ={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            )
          }}
        />

        <Tab.Screen 
          name = "Feedback" 
          component = {Feedback}
          options={{
            headerStyle: {
              backgroundColor: '#f50a96',
            },
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) => (
              <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require ('../Pages/Images/Icons/feedback.png')}
                  resizeMode = "contain"
                  style ={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />

              </View>
            )
          }}
        />

        <Tab.Screen 
          name = "Donation" 
          component = {Donation}
          options={{ 
            headerStyle: {
              backgroundColor: '#f50a96',
            },
            headerTitleAlign: 'center',
            tabBarIcon: ({focused}) => (
              <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require ('../Pages/Images/Icons/Donation.png')}
                  resizeMode = "contain"
                  style ={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />

              {/* <Text style = {{colour: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
              </Text> */}
                
              </View>
            )
          }}
        />
        <Tab.Screen 
          name = "Profile" 
          component = {LogOut} 
          options={{ headerShown: false,
            tabBarIcon: ({focused}) => (
              <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require ('../Pages/Images/Icons/Home.png')}
                  resizeMode = "contain"
                  style ={{
                    width: 35,
                    height: 35,
                    tintColor: focused ? '#e32f45' : '#748c94',
                  }}
                />
              </View>
            )
          }}
        />
    </Tab.Navigator>
  );
}
const style = StyleSheet.create({

})