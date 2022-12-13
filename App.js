import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './firebase/firebase';

import Home from './Pages/Screens/Home';
import UsersInfo from './Pages/Screens/UsersInfo';
import Login from './Pages/Screens/Login';
import Registration from './Pages/Screens/Registration';
import LogOut from './Pages/Screens/LogOut';
import Dashboard from './Pages/Screens/Dashboard';
import Feedback from './Pages/Screens/Feedback';
import Donation from './Pages/Screens/Donation';
import Tabs from './Navigation/Tabs';
import BasicH from './Pages/Basic/BasicH';
import IntermediateH from './Pages/intermediate/IntermediateH';
import AdvancedH from './Pages/Advanced/AdvancedH';
import Music from './Pages/Screens/Music';
import Videos from './Pages/Screens/Videos';
import Alphabet from './Pages/Basic/Alphabet';
import Color from './Pages/Basic/Color';
import Number from './Pages/Basic/Number';
import Animals from './Pages/intermediate/Animals';
import Vegetables from './Pages/intermediate/Vegetables';
import Fruits from './Pages/intermediate/Fruits';
import Earth from './Pages/Advanced/Earth';
import Science from './Pages/Advanced/Science';
import Months from './Pages/Advanced/Months';
import Weeks from './Pages/Advanced/Weeks';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f50a96',
            },
            headerTintColor: '#140000',
          }}
        >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="UsersInfo" 
          component={UsersInfo} 
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen 
          name="LogOut" 
          component={LogOut} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="Tabs" 
          component={Tabs} 
          options={{ headerShown: false }}
        />

        <Stack.Screen 
          name="BasicH" 
          component={BasicH} 
          options={{ headerTitleAlign: 'center', }}
        />
        
        <Stack.Screen 
          name="IntermediateH" 
          component={IntermediateH} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="AdvancedH" 
          component={AdvancedH} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Music" 
          component={Music} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Videos" 
          component={Videos} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Feedback" 
          component={Feedback} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Donation" 
          component={Donation} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Alphabet" 
          component={Alphabet} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Color" 
          component={Color} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Number" 
          component={Number} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Animals" 
          component={Animals} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Vegetables" 
          component={Vegetables} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Fruits" 
          component={Fruits} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Earth" 
          component={Earth} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Science" 
          component={Science} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Months" 
          component={Months} 
          options={{ headerTitleAlign: 'center', }}
        />

        <Stack.Screen 
          name="Weeks" 
          component={Weeks} 
          options={{ headerTitleAlign: 'center', }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
