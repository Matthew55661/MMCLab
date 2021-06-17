/*Screena na drawer ked sa vysunie lebo default drawer sa neda konfigurovat */
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image } from 'react-native';
import DateTime from '../components/dateTime';
import { useState } from 'react';
import React, { useEffect, useContext } from 'react';
import { Context } from '../state/store';
import { DropDownMenu } from './DropDownMenu';



export default function CustomDrawerContent(props) {
    const [state, dispatch] = useContext(Context);

    const [value, setValue] = useState(null);
    const data = [{ key: 'dark', value: 'Dark' }, { key: 'light', value: 'Light' }, { key: 'auto', value: 'Auto' },]; /* date pre moj vlastny dropdown menu 
                                                                                                                        lebo react nema originalne a vsetky community su MEH */

    useEffect(() => {

        if (value == 'dark') {
            dispatch({ type: 'SET_DARKMODE', payload: true }) /* aj user nastavi dark, tak sa posle cez dispatch do store.js dark na true a automatic na false */
            dispatch({ type: 'SET_AUTO', payload: false })
        }
        else if (value == 'light') {
            dispatch({ type: 'SET_DARKMODE', payload: false })  /*ak nastavi light tak to iste ako darkmode ale opacne */
            dispatch({ type: 'SET_AUTO', payload: false })
        }
        else if (value == 'auto') {
            dispatch({ type: 'SET_AUTO', payload: true })
            if (new Date().getHours() >= 20 || new Date().getHours() <= 6) {    /* tu ak je auto tak si checkne hodiny a odosle podla toho aky je interval*/

                if (state.darkmode === false) {
                    dispatch({ type: 'SET_DARKMODE', payload: false })
                }

            }
            else {
                if (state.darkmode === true) {
                    dispatch({ type: 'SET_DARKMODE', payload: true })
                }
            }

        }
    }, [value])







    return ( /* v hornej casti nazov a meno co user zada na homescreene, LOGO, resiznute, pozor na pouzivanie cisto scaleX a Y uz su deprecated, na vsetko pouzivam flex nech to je take iste aj na velkych a malych screenach*/
        <View style={{ flex: 1, paddingTop: 24, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}>
                    <Text style={styles.Text}> MMCLab </Text>
                    <Text style={styles.Text}> Vitaj {global.Name} </Text>

                </View>
                <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
                    <Image

                        source={require('../assets/logo_mmclab.png')}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }}>
                    <DateTime color='#F2AA4CFF'></DateTime>
                </View>
                <View style={{ alignSelf: 'center', flex: 1, alignItems: 'center', justifyContent: 'center' }}>


                </View>
                <View style={{ paddingHorizontal: 10, width: '100%' }}>
                    <Text style={{ color: "#F2AA4CFF", fontFamily: 'Montserrat', textAlign: 'center', paddingBottom: 8 }}>Farebný mód</Text>
                    <DropDownMenu
                        data={data}
                        value={data[0]}
                        itemHeight={32}
                        onSelect={(item) => setValue(item.key)}
                        style={{ borderColor: '#F2AA4CFF', borderWidth: 2, borderRadius: 20 }}
                        textStyle={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}
                        dropDownStyle={{ backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2', }}
                        dropDownItemStyle={{}}
                        dropDownItemStyle={{}} />
                </View>


            </View>

            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />

            </DrawerContentScrollView>
        </View >
    );
}
/*styles, vacsinou ich ale mam priamo v return kode, co z toho robi trochu spagety ale uz to prerabat nebudem*/
const styles = StyleSheet.create({
    Text: {
        fontFamily: 'Montserrat',
        fontSize: 35,
        color: '#F2AA4CFF'
    }
});
