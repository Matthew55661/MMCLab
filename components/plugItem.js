import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../state/store';
import { useContext } from 'react';

export const Item = ({ item, onToggle }) => {
    const [state, dispatch] = useContext(Context);
    return (
        <View style={{
            flex: 1, flexDirection: 'row', alignItems: 'center', height: 50, marginVertical: 24, margin: 4,

        }} >
            <Text style={{
                paddingLeft: 28,
                fontSize: 24,
                color: state.darkmode ? '#101820FF' : '#f2f2f2',
                fontFamily: 'Montserrat',
                alignSelf: 'center'
            }} > {item.title}</Text>
            <View style={{ flex: 1, alignItems: 'flex-end', paddingVertical: 2 }}>


                <TouchableOpacity onPress={() => onToggle(item)} style={{

                    flex: 1,
                    flexDirection: 'row',

                    borderColor: state.darkmode ? '#101820FF' : '#f2f2f2',
                    backgroundColor: state.darkmode ? item.isToggled ? '#F2AA4CFF' : '#101820FF' : item.isToggled ? '#F2AA4CFF' : '#f2f2f2',
                    width: 100,
                    marginRight: '10%',
                    alignItems: 'center',
                    borderRadius: 30,

                    borderWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}>
                    <Text style={{
                        color: state.darkmode ? item.isToggled ? '#101820FF' : '#F2AA4CFF' : item.isToggled ? '#f2f2f2' : '#F2AA4CFF',
                        fontFamily: 'Montserrat'
                    }}
                    >{item.isToggled ? 'ON' : 'OFF'}  </Text>
                    <Icon name={item.isToggled ? 'power-plug' : 'power-plug-off'} size={35} color={state.darkmode ? item.isToggled ? '#101820FF' : '#F2AA4CFF' : item.isToggled ? '#f2f2f2' : '#F2AA4CFF'} />
                </TouchableOpacity>
            </View>


        </View >
    )
}


