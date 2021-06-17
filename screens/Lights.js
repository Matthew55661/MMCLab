/*screena na svetla*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, backgroundcolor, TouchableOpacity, SafeAreaView } from 'react-native';
import { ColorPicker } from 'react-native-color-picker';
import { useState } from 'react';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Context } from '../state/store';
import { useContext } from 'react';
import axios from 'axios';

export default function App(props) {
    const URL = 'http://b41e2d4c5a31.ngrok.io'; //URLka na ngrok kde bezi server a token
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiNTVlMjY0YjNmMjM0M2JmOGVhOWE4MjU2NzFmZGVlZiIsImlhdCI6MTYyMTI2Njc1MCwiZXhwIjoxOTM2NjI2NzUwfQ.4BSzlYFyMMsMKTqmaQwxlvXPIY70-ZLqd_xhZp-Zyas';
    const [color, setColor] = useState()
    const [toggleLED, setToggleLED] = useState()
    const [toggleLamp, setToggleLamp] = useState()
    const [toggleBiglamp, setToggleBiglamp] = useState()
    const [state, dispatch] = useContext(Context);




    function hexToRgb(hex) { // pouzivam color wheel libku na setovanie farby LED diod, ale libka pracuje s HEX tak to treba parsnut do RGB aby som mohol odoslat v requeste
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ]
    }


    function ledHandler() {


        setToggleLED(!toggleLED)
        if (toggleLED == false) {
            axios
                .post(
                    URL + '/api/services/light/turn_on',
                    reqbody,
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
        else if (toggleLED == true) {
            axios
                .post(
                    URL + "/api/services/light/turn_off",
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
    function lampHandler() {
        setToggleLamp(!toggleLamp)
        if (toggleLamp == false) {
            axios
                .post(
                    URL + "/api/services/script/zapni_lampu-",
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
        else if (toggleLamp == true) {
            axios
                .post(
                    URL + "/api/services/script/vypni_lampu-",
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
    function biglampHandler() {
        setToggleBiglamp(!toggleBiglamp)
        if (toggleBiglamp == false) {
            axios
                .post(
                    URL + "/api/services/script/stropne_osvetlenie",
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
        else if (toggleBiglamp == true) {
            axios
                .post(
                    URL + "/api/services/script/stropne_osvetlenie",
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

        < SafeAreaView style={{ flex: 1, backgroundColor: state.darkmode ? '#101820FF' : '#f2f2f2' }
        }>

            <Header title='Svetlá' />           {/*3 buttony a color picker, buttony klasika nic extra*/}

            <View style={{
                flex: 1,

                margin: 24,




            }}>
                <View style={{

                    flex: 1,
                    padding: 8,
                    backgroundColor: '#F2AA4CFF',
                    shadowOffset: { width: 2, height: 2 },
                    marginHorizontal: 12,
                    shadowOpacity: 0.,
                    shadowRadius: 6,
                    elevation: 20,
                    borderRadius: 20
                }}>
                    <TouchableOpacity onPress={() => ledHandler()} style={{
                        marginHorizontal: '10%',
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        borderColor: state.darkmode ? '#101820FF' : '#f2f2f2',
                        borderWidth: 1,
                        margin: 3,
                        //backgroundColor: color
                        backgroundColor: toggleLED ? color : "#F2AA4CFF",
                    }}>
                        <Text style={{

                            color: state.darkmode ? '#101820FF' : '#f2f2f2',
                            padding: 15,
                            fontSize: 20,
                            fontFamily: 'Montserrat'

                        }}
                        >LED: {toggleLED ? "ON" : "OFF"}</Text>
                        <Icon name={toggleLED ? 'lightbulb' : 'lightbulb-off'} size={35} color={state.darkmode ? '#101820FF' : '#f2f2f2'} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => lampHandler()} style={{
                        marginHorizontal: '10%',
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        borderColor: state.darkmode ? '#101820FF' : '#f2f2f2',
                        borderWidth: 1,
                        margin: 3,
                        backgroundColor: state.darkmode ? toggleLamp ? "#101820FF" : '#F2AA4CFF' : toggleLamp ? "#f2f2f2" : '#F2AA4CFF',
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: state.darkmode ? toggleLamp ? '#F2AA4CFF' : '#101820FF' : toggleLamp ? '#F2AA4CFF' : '#f2f2f2',
                            padding: 15,
                            fontSize: 20,
                            fontFamily: 'Montserrat'
                        }}
                        >Lampa: {toggleLamp ? "ON" : 'OFF'}</Text>
                        <Icon name={toggleLamp ? 'lightbulb' : 'lightbulb-off'} size={35} color={state.darkmode ? toggleLamp ? '#F2AA4CFF' : '#101820FF' : toggleLamp ? '#F2AA4CFF' : '#f2f2f2'} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => biglampHandler()} style={{
                        marginHorizontal: '10%',
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 50,
                        borderColor: state.darkmode ? '#101820FF' : '#f2f2f2',
                        borderWidth: 1,
                        margin: 3,
                        backgroundColor: state.darkmode ? toggleBiglamp ? "#101820FF" : '#F2AA4CFF' : toggleBiglamp ? "#f2f2f2" : '#F2AA4CFF',
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: state.darkmode ? toggleBiglamp ? '#F2AA4CFF' : '#101820FF' : toggleBiglamp ? '#F2AA4CFF' : '#f2f2f2',
                            padding: 15,
                            fontSize: 20,
                            fontFamily: 'Montserrat'
                        }}
                        >Strop: {toggleBiglamp ? "ON" : "OFF"}</Text>
                        <Icon name={toggleBiglamp ? 'lightbulb' : 'lightbulb-off'} size={35} color={state.darkmode ? toggleBiglamp ? '#F2AA4CFF' : '#101820FF' : toggleBiglamp ? '#F2AA4CFF' : '#f2f2f2'} />
                    </TouchableOpacity>
                </View>

                <StatusBar style="auto" />
                <View style={{ flex: 1.5, }} >
                    {/* tento color wheel ma v sebe veltke tlacitko ktore odosle request a v tele ma farbu v RGB uz*/}
                    <ColorPicker
                        onColorChange={vhs => setColor(color)}
                        onColorSelected={color => {
                            let hexcolor = hexToRgb(color) // do premennej hexcolor dam color co presla funkciou vyssie co ju parslo na RGH, hej je to dost matuce

                            axios
                                .post(
                                    URL + '/api/services/light/turn_on',
                                    { rgb_color: hexcolor }, //telo requestu kde posielam farbu

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

                        style={{ flex: 1, }}
                    />
                </View>
            </View>



        </SafeAreaView >
    );

}

const styles = StyleSheet.create({


});
