import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';
import Header from '../components/header';
import { Item } from '../components/plugItem'
import { LinearGradient } from 'expo-linear-gradient';
import { Context } from '../state/store';
import { useContext } from 'react';
import axios from 'axios';
const DATA = [      // Tu je pole objektov, kazdy objekt reprezentuje jednu zasuvku, v smartoomke su 3 teraz tak su tu 3 objektyz
    {
        id: '1',
        title: 'Zásuvka1',
        isToggled: false

    },
    {
        id: '2',
        title: 'Zásuvka2',
        isToggled: false
    },
    {
        id: '3',
        title: 'Zásuvka3',
        isToggled: false
    },




];
export default function plugs() {
    const URL = 'http://b41e2d4c5a31.ngrok.io';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';
    const [state, dispatch] = useContext(Context);
    const [list, setList] = useState(DATA);  // do list si nacitam pole objektov


    function plugHandler(item) {   // tuto to zacina byt interesting tu riesim ako mat jeden state pre vsetky zastrcky a aby si to aj pamatali
        let items = list;           // hodim si list do indexu
        let index = items.findIndex(el => el.id === item.id);    // hladam presne jeden item podla id a ked najdem setnem do premennej index

        items[index] = { ...items[index], isToggled: !items[index].isToggled }; // ten index rozbalim, prepisem mu hodnotu isToggled na negaciu cize ak bol on je off a opacne
        setList([...items])// setnem to naspat 
        console.log(item.title, !item.isToggled)    // neni treba

        if (items.isToggled == false && items.id == '1') {  // post request podla toho ktoru zastrcku stlacim
            axios
                .post(
                    URL + "/api/services/script/zapni_lampu",
                    0,
                    {
                        headers: {
                            Authorization: 'Bearer ' + token
                        },
                    }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else if (items.isToggled == true && items.id == '1') {
            axios
                .post(
                    URL + "/api/services/media_player/vypni_lampu",
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else if (items.isToggled == true && items.id == '2') {
            axios
                .post(
                    URL + "/api/services/media_player/turn_off",
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else if (items.isToggled == false && items.id == '2') {
            axios
                .post(
                    URL + "/api/services/media_player/turn_on",
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else if (items.isToggled == false && items.id == '3') {
            axios
                .post(
                    URL + "/api/services/",
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
        else if (items.isToggled == false && items.id == '3') {
            axios
                .post(
                    URL + "/api/services/",
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                }
                )
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }
    }



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }}>
            <Header title='Zásuvky' />
            <View style={{ flex: 1 }}>

            </View>
            <FlatList       // klasicky flatlist, vytiahnuty na kartu
                style={{
                    marginHorizontal: 24,
                    backgroundColor: '#F2AA4CFF',
                    height: 200,
                    shadowOffset: { width: 2, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 6,
                    elevation: 20,
                    borderRadius: 20


                }}
                data={list}
                renderItem={({ item }) => <Item item={item} onToggle={plugHandler} />}  /// tu passujem komponent item co je definovany v plugitem.js
                keyExtractor={item => item.id}

            />

            <View style={{ flex: 2, }}></View>
        </SafeAreaView >
    )

}



