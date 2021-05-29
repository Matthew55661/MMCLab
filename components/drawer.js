
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View, ImageBackground, Image, Button, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTime from '../components/dateTime';
import { useState } from 'react';
import ToggleSwitch from 'toggle-switch-react-native'
import React, { useEffect, useContext } from 'react';
import { Context } from '../state/store';

export default function CustomDrawerContent(props) {
    const [state, dispatch] = useContext(Context);

    function Darkmode() {
        dispatch({ type: 'SET_DARKMODE', payload: !state.darkmode })


    }


    return (
        <View style={{ flex: 1, paddingTop: 24, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={styles.Text}> MMCLab </Text>
                    <Text style={styles.Text}> Vitaj {global.Name} </Text>

                </View>
                <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Icon name="gitlab" size={155} color='#F2AA4CFF' />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                    <DateTime color='#F2AA4CFF'></DateTime>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ color: "#F2AA4CFF", fontFamily: 'Montserrat' }}>Darkmode</Text>

                </View>
                <ToggleSwitch
                    isOn={state.darkmode}
                    onColor="#F2AA4CFF"
                    offColor="#ccc"
                    animationSpeed={350}
                    size="large"
                    onToggle={isOn => Darkmode()}
                />
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        </View >
    );
}
const styles = StyleSheet.create({
    Text: {
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#F2AA4CFF'
    }
});
