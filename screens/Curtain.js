import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { Context } from '../state/store';
import { useContext } from 'react';



export default function Curtain() {
    const URL = 'http://b41e2d4c5a31.ngrok.io';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';
    const [state, dispatch] = useContext(Context);
    const [toggleCurains, setToggleCurains] = useState()
    function stopHandler() {

        axios
            .post(
                URL + '/services/script/stop_zaves--',
                0,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                }
            )

            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }
    function curtainHandler() {
        setToggleCurains(!toggleCurains)

        if (toggleCurains == false) {

            axios
                .post(
                    URL + '/services/script/otvor_zaves--',
                    0,
                    {
                        headers: {
                            Authorization: 'Bearer ' + token,
                        },
                    }
                )

                .catch(function (error) {
                    // handle error
                    console.log(error);
                })

        }
        else if (toggleCurains == true) {

            axios
                .post(
                    URL + '/services/script/zatvor_zaves--',
                    0, {
                    headers: {
                        Authorization: 'Bearer ' + token,
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
            <Header title='Záves' />
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '10%' }}>
                <TouchableOpacity
                    onPress={() => stopHandler()}
                    style={{ backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2', width: '35%', height: '25%', borderRadius: 30, justifyContent: 'center', borderWidth: 2, borderColor: 'red', }}>
                    <Text style={{ textAlign: 'center', justifyContent: 'center', fontFamily: 'Montserrat', color: 'red' }}>STOP</Text>
                </TouchableOpacity>



            </View>
            <View style={{ flex: 1, paddingBottom: '10%' }}>
                <TouchableOpacity onPress={() => curtainHandler()}
                    style={{

                        flex: 1,
                        aspectRatio: 1,
                        alignSelf: 'center',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 200,
                        borderWidth: 2,
                        borderColor: '#F2AA4CFF',
                        alignSelf: 'center',
                        backgroundColor: state.darkmode ? toggleCurains ? '#101820FF' : "#F2AA4CFF" : toggleCurains ? '#f2f2f2' : "#F2AA4CFF",
                    }}><Icon name={toggleCurains ? 'blinds' : 'blinds-open'} size={75} color={state.darkmode ? toggleCurains ? '#F2AA4CFF' : "#101820FF" : toggleCurains ? '#F2AA4CFF' : "#f2f2f2"} />
                    <Text style={{
                        paddingRight: 30,
                        textAlign: 'center',
                        color: state.darkmode ? toggleCurains ? '#F2AA4CFF' : "#101820FF" : toggleCurains ? '#F2AA4CFF' : "#f2f2f2",
                        padding: 15,
                        fontSize: 30,
                        fontFamily: 'Montserrat'
                    }} >  {toggleCurains ? "Zatvorené" : "Otvorené"}</Text>
                </TouchableOpacity>

            </View>


        </SafeAreaView>
    )

}



const styles = StyleSheet.create({


});
