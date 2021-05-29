import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/core'
import { DrawerActions } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';


export default function Header(props) {
    const navigation = useNavigation()



    return (

        <View style={styles.Header}>


            <TouchableOpacity style={{ flex: 1 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
                <Icon name="md-menu" size={35} color='#F2AA4CFF' />
            </TouchableOpacity>
            <Text style={styles.text}>{props.title}</Text>
            <View style={{ flex: 1 }} />

        </View>

    )

}



const styles = StyleSheet.create({
    Header: {

        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 120,
        //backgroundColor: '#203bfe',//'#F2AA4CFF',
        paddingTop: 20,
        borderBottomRightRadius: 50,
        borderBottomLeftRadius: 50,
    },
    text: {

        textAlign: 'center',
        flex: 2,
        fontSize: 35,
        color: '#F2AA4CFF',//'#101820FF',
        fontFamily: 'Montserrat',

    }
});