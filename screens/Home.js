/* Uvodna screena ktoru user vidi ako prvu */
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button, Alert, SafeAreaView, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '../components/header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTime from '../components/dateTime';
import { useLinkProps } from '@react-navigation/native';
import { useState } from 'react';


export default function App(props) {
    const [password, setPassword] = useState('');
    const [name, setName] = useState();

    global.Name = name;
    return (



        <View style={{ flex: 1 }}>
<<<<<<< HEAD
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: 0.4 }] }}>
=======
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}> {/*pre iOS MUSI BYT, v androide sa to pousuva pekne samo, v iosku musime view kde je vybehne klavesnica tymto obalit*/}
                <ImageBackground source={require('../assets/background.jpg')} style={styles.container}> {/*free pixelart pozadie, mam rad pixealarty*/}
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', transform: [{ scale: 0.4 }] }}> {/*scaleX a Y je uz deprecated*/}
>>>>>>> 29b9ad60f2a10948c8b6907d2b70b56d4a9d7171
                        {/*Logo smartroomky*/}
                        <Image


                            source={require('../assets/logo-white.png')}
                        />

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                        <DateTime color='white'></DateTime>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-start', paddingBottom: 8 }} >
                        <View style={{ paddingBottom: 6 }}>
                            {/*textinput kde user da svoje meno a ulozi sa to do globalnej premennej a vypise ho v draweri, neni to povinne*/}
                            <TextInput
                                onChangeText={(text) => setName(text)}
                                style={{ textAlign: 'center', height: 40, borderColor: 'gray', borderRadius: 50, borderWidth: 2, backgroundColor: 'white', width: 300, alignSelf: 'center', opacity: 0.75, fontFamily: 'Montserrat', fontWeight: '900' }}
                                placeholder="Používateľ"
                                placeholderTextColor='black'


                            />
                        </View>
                        <View style={{ paddingBottom: 6 }}>
                            {/* tento input je na heslo na roomku, cca nejake zabezpecenie , ulozi heslo do premennej a definujem tu este napr ze klavesnica je striktne numericka a secured entry ze po napisani hesla sa to zmeni na * */}
                            <TextInput
                                onChangeText={(text) => setPassword(text)}
                                style={{ textAlign: 'center', height: 40, borderColor: 'gray', borderRadius: 50, borderWidth: 2, backgroundColor: 'white', width: 300, alignSelf: 'center', opacity: 0.75, fontFamily: 'Montserrat', }}
                                placeholder="Heslo k miestnosti"
                                placeholderTextColor='black'

                                keyboardType='numeric'
                                secureTextEntry
                                maxLength={5}
                            />
                        </View>
                        {/* po stlaceni to checkne heslo co user zadal a bud ho pusti dalej alebo vyhodi popup ze zle heslo*/}
                        <TouchableOpacity onPress={() => {
                            if (password === '11112')
                                props.navigation.replace('MainMenu')
                            else { Alert.alert('Zlé heslo') }

                        }

                        } style={{
                            paddingTop: 3,
                            width: 200,
                            height: 30,
                            alignSelf: 'center',
                            marginBottom: 8,
                            borderRadius: 50,
                            borderColor: 'grey',
                            borderWidth: 2,
                            backgroundColor: '#ccc',


                        }}><Text style={{
                            alignSelf: 'center',
                            color: 'black',
                            fontSize: 15,
                            fontFamily: 'Montserrat'
                        }}>Login</Text>

                        </TouchableOpacity>
                        {/* ak by niekto heslo nevedel tak mu vypise v BP na konci to mam*/}
                        <View style={{ justifyContent: 'flex-end', flexDirection: 'column', flex: 1 }}>
                            <TouchableOpacity onPress={() => {
                                { Alert.alert('Lepšie prečítaj prílohy') }

                            }

                            } style={{
                                paddingTop: 3,

                                height: 30,

                                alignSelf: 'center',
                                borderRadius: 50,
                                borderColor: 'grey',
                                borderWidth: 2,
                                backgroundColor: '#ccc',


                            }}><Text style={{
                                alignSelf: 'center',
                                color: 'black',
                                fontSize: 15,
                                fontFamily: 'Montserrat'
                            }}>Zabudnuté heslo</Text>

                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

            </KeyboardAvoidingView>
        </View >








    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'flex-start',
        alignItems: 'center',


    },

    Text: {
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Russo',

    }

});
