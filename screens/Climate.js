import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../state/store';
import { useContext } from 'react';
import Slider from '@react-native-community/slider';

import axios from 'axios';
export default function Voice() {
    const URL = 'http://b41e2d4c5a31.ngrok.io';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';
    const [state, dispatch] = useContext(Context);
    const [power, setPower] = useState();
    const [heat, setHeat] = useState(20);
    const [fan, setFan] = useState(0);
    const [fanspeed, setFanspeed] = useState();
    const [oscilate, setoscilate] = useState();


    function pressHeat() {
        setPower(!power)
        if (power == false)
            axios.all([
                axios.post(
                    URL + '/services/climate/turn_on',
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
                    }),
                axios.post(
                    URL + '/services/climate/set_hvac_mode',
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
            ])



        else if (power == true) {
            axios
                .post(
                    URL + '/services/climate/turn_off',
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
    }
    function setTemp() {
        axios
            .post(
                URL + '/services/climate/set_temperature',
                { temperature: heat },
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
    function toggleFan() {
        setFan(!fan)
        if (fan == false) {
            axios
                .post(
                    URL + '/services/fan/turn_on',
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
        else if (fan == true) {
            axios
                .post(
                    URL + '/services/fan/turn_off',
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
    }
    function oscilatte() {
        setoscilate(!oscilate)
        if (oscilate == false) {
            axios
                .post(
                    URL + '/services/fan/oscilate',
                    { oscillating: true },
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
        else if (oscilate == true) {
            axios
                .post(
                    URL + '/services/fan/oscilate',
                    { oscillating: false },
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
    }
    function setspeed() {
        axios
            .post(
                URL + '/services/fan/set_percentage',
                { percentage: fanspeed },
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


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }}>
            <Header title='Teplota' />

            <View style={{
                padding: 8,
                backgroundColor: '#F2AA4CFF',
                shadowOffset: { width: 2, height: 2 },
                marginVertical: 22,
                marginHorizontal: 22,
                shadowOpacity: 0.,
                shadowRadius: 6,
                elevation: 20,
                borderRadius: 20, flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', margin: 12, padding: 12
            }}>
                <TouchableOpacity onPress={() => pressHeat()} style={{ borderWidth: 2, borderColor: '#F2AA4CFF', margin: 16, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? power ? "#101820FF" : '#F2AA4CFF' : power ? "#f2f2f2" : '#F2AA4CFF' }}>
                    <Icon name='power' size={35} style={{ fontFamily: 'Montserrat', color: state.darkmode ? power ? "#F2AA4CFF" : '#101820FF' : power ? "#F2AA4CFF" : '#f2f2f2' }}></Icon>
                    <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? power ? "#F2AA4CFF" : '#101820FF' : power ? "#F2AA4CFF" : '#f2f2f2' }}>Napájanie</Text>
                </TouchableOpacity>
                < View style={{ borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', }}>
                </ View>


                <TouchableOpacity onPress={() => setTemp()} style={{ paddingRight: 22, borderWidth: 2, borderColor: '#F2AA4CFF', margin: 14, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? '#101820FF' : "#f2f2f2", fontSize: 20 }}> Nastaviť</Text>
                </TouchableOpacity>


            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF', fontSize: 35 }}>Teplota: {heat}°C </Text>
                <Slider
                    style={{ width: 300, height: 50 }}
                    minimumValue={20}
                    maximumValue={30}
                    step={1}
                    onValueChange={value => setHeat(value)}
                    thumbTintColor='#F2AA4CFF'
                    minimumTrackTintColor="#F2AA4CFF"
                    maximumTrackTintColor={state.darkmode ? '#f2f2f2' : "#000000"}
                />
            </View>

            <View style={{
                flex: 2, justifyContent: 'center', alignItems: 'center', paddingBottom: '10%',
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF', fontSize: 30, }}>Ventilátor</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    padding: 8,
                    backgroundColor: '#F2AA4CFF',
                    shadowOffset: { width: 2, height: 2 },
                    marginHorizontal: 22,
                    shadowOpacity: 0.,
                    shadowRadius: 6,
                    elevation: 20,
                    borderRadius: 20,
                }}>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => toggleFan()}
                            style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? fan ? "#101820FF" : '#F2AA4CFF' : fan ? "#f2f2f2" : '#F2AA4CFF', }}>
                            <Icon name="power" size={35} color={state.darkmode ? fan ? "#F2AA4CFF" : '#101820FF' : fan ? "#F2AA4CFF" : '#f2f2f2'} />
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? fan ? "#F2AA4CFF" : '#101820FF' : fan ? "#F2AA4CFF" : '#f2f2f2' }}>Napájanie</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => oscilatte()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? oscilate ? "#101820FF" : '#F2AA4CFF' : oscilate ? "#f2f2f2" : '#F2AA4CFF', }}>
                            <Icon name="rotate-right" size={35} color={state.darkmode ? oscilate ? "#F2AA4CFF" : '#101820FF' : oscilate ? "#F2AA4CFF" : '#f2f2f2'} />
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? oscilate ? "#F2AA4CFF" : '#101820FF' : oscilate ? "#F2AA4CFF" : '#f2f2f2' }}>Otáčanie</Text>
                        </TouchableOpacity>
                    </View>


                    <View style={{ flex: 1, alignSelf: 'flex-start' }}>
                        <TouchableOpacity onPress={() => setspeed()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', margin: 14, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? '#101820FF' : "#f2f2f2", fontSize: 20, }}> Nastaviť</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ alignSelf: 'center', marginTop: 16, fontSize: 35, fontFamily: 'Montserrat', color: '#F2AA4CFF' }}>Rýchlosť:{fanspeed}%</Text>
                    <Slider
                        style={{ width: 300, height: 50 }}
                        minimumValue={0}
                        maximumValue={100}
                        step={5}
                        onValueChange={value => setFanspeed(value)}
                        thumbTintColor='#F2AA4CFF'
                        minimumTrackTintColor="#F2AA4CFF"
                        maximumTrackTintColor={state.darkmode ? '#f2f2f2' : "#000000"}
                    />
                </View>

            </View >



        </SafeAreaView >
    )

}



const styles = StyleSheet.create({


});
