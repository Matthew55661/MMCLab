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
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();





function Mainmenu() {

  return (


    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="Lights" drawerContentOptions={{
      activeTintColor: '#F2AA4CFF',
      itemStyle: { borderRadius: 20, borderColor: '#F2AA4CFF', borderWidth: 2, },
      labelStyle: { fontFamily: 'Montserrat', color: '#F2AA4CFF' }



    }}>

      <Drawer.Screen name="Svetlá" component={Lights} options={{
        drawerIcon: ({ focused, size }) => (
          <Icon
            name="lightbulb"
            size={size}
            color={focused ? '#F2AA4CFF' : '#ccc'}
          />
        ),
      }} />
      <Drawer.Screen name="Zástrčky" component={plugs} options={{
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