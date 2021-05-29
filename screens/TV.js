import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, Dimensions, backgroundcolor, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';
import { Context } from '../state/store';
import axios from 'axios';
import { useContext } from 'react';
export default function TV() {
    const URL = 'http://b41e2d4c5a31.ngrok.io';
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';
    const [state, dispatch] = useContext(Context);
    const [togglePower, setTogglePower] = useState();
    const [toggleMute, setToggleMute] = useState();
    const [toggleMenu, setToggleMenu] = useState();
    const [powerHIFI, setsowerHifi] = useState();

    const [input, setinput] = useState();

    const [stop, setstop] = useState();

    function pressPowerHandler() {
        setTogglePower(!togglePower)


    }



    function pressTVhandler() {
        setinput(!input)
        axios
            .post(
                URL + 'api/services/script/prepni_televizor--',
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
    function pressBRhandler() {
        setinput(!input)
        axios
            .post(
                URL + 'api/services/script/prepni_blueray--',
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
    function pressPowerHandlerHIFI() {
        setsowerHifi(!powerHIFI)
        if (powerHIFI == true) {
            axios
                .post(
                    URL + 'api/services/media_player/turn_on--',
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
        else if (powerHIFI == false) {
            axios
                .post(
                    URL + 'api/services/media_player/turn_off--',
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
    function pressmuteHandler() {
        setToggleMute(!toggleMute)
        if (toggleMute == true) {
            axios
                .post(
                    URL + 'api/services/media_player/volume_mute--',
                    { is_volume_muted: false },
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
        else if (toggleMute == false) {
            axios
                .post(
                    URL + 'api/services/media_player/volume_mute--',
                    { is_volume_muted: true },
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
    function pressShuffleHandler() {
        axios
            .post(
                URL + 'api/services/media_player/shuffle_set--',
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
    function pressStopHandler() {
        setstop(!stop)
        if (stop == true) {
            axios
                .post(
                    URL + 'api/services/media_player/media_play--',
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
        else if (stop == false) {
            axios
                .post(
                    URL + 'api/services/media_player/media_stop--',
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
    function leftHandler() {
        axios
            .post(
                URL + 'api/services/media_player/media_previous_track--',
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
    function rightHandler() {
        axios
            .post(
                URL + 'api/services/media_player/media_next_track--',
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
    function upHandler() {
        axios
            .post(
                URL + 'api/services/media_player/volume_up--',
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
    function downHandler() {
        axios
            .post(
                URL + 'api/services/media_player/volume_down--',
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
    function playpausehandler() {
        axios
            .post(
                URL + 'api/services/media_player/media_play_pause--',
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



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }}>
            <Header title='Televízor' />
            <View style={{
                padding: 8,
                backgroundColor: '#F2AA4CFF',
                shadowOffset: { width: 2, height: 2 },
                marginHorizontal: 12,
                shadowOpacity: 0.,
                shadowRadius: 6,
                elevation: 20,
                borderRadius: 20, flex: 0.3, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: 12, padding: 12
            }}>
                <TouchableOpacity onPress={() => pressTVhandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', margin: 14, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? input ? "#101820FF" : '#F2AA4CFF' : input ? "#f2f2f2" : '#F2AA4CFF' }}>
                    <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? input ? "#F2AA4CFF" : '#101820FF' : input ? "#F2AA4CFF" : '#f2f2f2', fontSize: 35 }}>TV</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => pressPowerHandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', margin: 14, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? togglePower ? "#101820FF" : '#F2AA4CFF' : togglePower ? "#f2f2f2" : '#F2AA4CFF', }}>
                    <Icon name="power" size={35} color={state.darkmode ? togglePower ? "#F2AA4CFF" : '#101820FF' : togglePower ? "#F2AA4CFF" : '#f2f2f2'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => pressBRhandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', margin: 14, borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? input ? '#F2AA4CFF' : "#101820FF" : input ? '#F2AA4CFF' : "#f2f2f2" }}>
                    <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? input ? '#101820FF' : "#F2AA4CFF" : input ? "#f2f2f2" : '#F2AA4CFF' }}>BLUERAY</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 2, alignItems: 'center', margin: 12, }}>
                <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', }} >
                    <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF', fontSize: 30, }}>Multimédiá</Text>
                </View>
                <View style={{
                    flex: 1, flexDirection: 'row',
                    padding: 8,
                    backgroundColor: '#F2AA4CFF',
                    shadowOffset: { width: 2, height: 2 },
                    marginHorizontal: 4,
                    shadowOpacity: 0.,
                    shadowRadius: 6,
                    elevation: 20,
                    borderRadius: 20,
                }}>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => pressPowerHandlerHIFI()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? powerHIFI ? "#101820FF" : '#F2AA4CFF' : powerHIFI ? "#f2f2f2" : '#F2AA4CFF', }}>
                            <Icon name="power" size={35} color={state.darkmode ? powerHIFI ? "#F2AA4CFF" : '#101820FF' : powerHIFI ? "#F2AA4CFF" : '#f2f2f2'} />
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? powerHIFI ? "#F2AA4CFF" : '#101820FF' : powerHIFI ? "#F2AA4CFF" : '#f2f2f2' }}>Power</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => pressShuffleHandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? "#101820FF" : "#f2f2f2" }}>
                            <Icon name="shuffle-variant" size={35} color="#F2AA4CFF" />
                            <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}>Shuffle</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => pressStopHandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? stop ? "#101820FF" : '#F2AA4CFF' : stop ? "#f2f2f2" : '#F2AA4CFF' }}>
                            <Icon name={stop ? 'play' : "stop"} size={35} color={state.darkmode ? stop ? "#F2AA4CFF" : '#101820FF' : stop ? "#F2AA4CFF" : '#f2f2f2'} />
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? stop ? "#F2AA4CFF" : '#101820FF' : stop ? "#F2AA4CFF" : '#f2f2f2' }}>{stop ? 'play' : 'Stop'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1, }}>
                        <TouchableOpacity onPress={() => pressmuteHandler()} style={{ flex: 1, borderWidth: 2, borderColor: '#F2AA4CFF', borderRadius: 50, aspectRatio: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: state.darkmode ? toggleMute ? "#101820FF" : '#F2AA4CFF' : toggleMute ? "#f2f2f2" : '#F2AA4CFF' }}>
                            <Icon name={toggleMute ? 'volume-high' : "volume-mute"} size={35} color={state.darkmode ? toggleMute ? "#F2AA4CFF" : '#101820FF' : toggleMute ? "#F2AA4CFF" : '#f2f2f2'} />
                            <Text style={{ fontFamily: 'Montserrat', color: state.darkmode ? toggleMute ? "#F2AA4CFF" : '#101820FF' : toggleMute ? "#F2AA4CFF" : '#f2f2f2' }}>Mute</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                < View style={styles.Center}>
                    <View style={{ flex: 1, flexDirection: 'row', }}>
                        <View style={{ flex: 1, }}>

                        </View>

                        <TouchableOpacity onPress={() => upHandler()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => 0}>
                            <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}> volume</Text>
                            <Icon name="chevron-up" size={35} color='#F2AA4CFF' />

                        </TouchableOpacity>

                        <View style={{ flex: 1, }}></View>
                    </View >

                    <View style={{ flex: 1, flexDirection: 'row', }}>

                        <TouchableOpacity onPress={() => leftHandler()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => 0}>
                            <Icon name="chevron-left" size={35} color='#F2AA4CFF' />
                            <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}> previous</Text>
                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => playpausehandler()} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderColor: '#F2AA4CFF', backgroundColor: '#F2AA4CFF', borderRadius: 500 }} onPress={() => 0} >
                            <Icon name="play-pause" size={35} color={state.darkmode ? '#101820FF' : '#f2f2f2'} />

                        </TouchableOpacity>


                        <TouchableOpacity onPress={() => rightHandler()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => 0}>
                            <Icon name="chevron-right" size={35} color='#F2AA4CFF' />
                            <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}> next</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 1, }}></View>

                        <TouchableOpacity onPress={() => downHandler()} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => 0}>
                            <Icon name="chevron-down" size={35} color='#F2AA4CFF' />
                            <Text style={{ fontFamily: 'Montserrat', color: '#F2AA4CFF' }}> volume</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, }}></View>

                    </View>

                </View>



            </View>

        </SafeAreaView >
    )
}


const styles = StyleSheet.create({

    Center: {

        flex: 4,
        aspectRatio: 1,
        borderRadius: 300,
        borderWidth: 2,
        borderColor: '#F2AA4CFF',
        marginTop: 26

    },
});