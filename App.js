/*Hlavny file riesi sa tu len navigacia, nevykresluje sa tak ako zvysok*/

import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import Lights from './screens/Lights';
import Home from './screens/Home';
import plugs from './screens/plugs';
import TV from './screens/TV';
import Curtain from './screens/Curtain';
import Climate from './screens/Climate';
import CustomDrawer from './components/drawer'

import Store from './state/store';
import { getURL } from './storage';
const Drawer = createDrawerNavigator();  //vytvorime si dva druhy navigacie
const Stack = createStackNavigator();


global.url = 'https://5b31a233b653.eu.ngrok.io';
global.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';

function Mainmenu() {
  getURL().then((value) => {
    global.url = value
  })
  return (


    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Lights" drawerContentOptions={{ // tu sa posiela custom drawer co je spraveny v drawer.js
      activeTintColor: '#F2AA4CFF',
      itemStyle: { borderRadius: 20, borderColor: '#F2AA4CFF', borderWidth: 2, },
      labelStyle: { fontFamily: 'Montserrat', color: '#F2AA4CFF' }



    }}>

      <Drawer.Screen name="Svetlá" component={Lights} options={{  // kazda screena ma meno, komponent kam presmeruje po kliknuti a ikonu
        drawerIcon: ({ focused, size }) => (
          <Icon               // ikony su materialcommunity size som nedefinoval lebo defaultne sa mi hodilu
            name="lightbulb"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'} // focuse znamena farba ak to ma user stlacene, alebo je na tej screene a triggerne drawer tak je to vysvietene aby vedel kde sa nachadza
          />
        ),
      }} />
      <Drawer.Screen name="Zásuvky" component={plugs} options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="power-plug"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'}
          />
        ),
      }} />
      <Drawer.Screen name="Multimédiá" component={TV} options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="television"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'}
          />
        ),
      }} />
      <Drawer.Screen name="Záves" component={Curtain} options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="blinds"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'}
          />
        ),
      }} />
      <Drawer.Screen name="Teplota" component={Climate} options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="fan"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'}
          />
        ),
      }} />

    </Drawer.Navigator>

  )

}
export default function App() {
  const [loaded] = useFonts({
    Russo: require('./assets/fonts/RussoOne-Regular.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Store>
      <NavigationContainer  >
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="MainMenu" component={Mainmenu} />
        </Stack.Navigator>

      </NavigationContainer>
    </Store>
  );

}

const styles = StyleSheet.create({

});
