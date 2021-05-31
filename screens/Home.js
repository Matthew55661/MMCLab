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
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <ImageBackground source={require('../assets/background.jpg')} style={styles.container}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{
                            fontSize: 50,
                            color: 'white',
                            //fontWeight: 'bold',
                            fontFamily: 'Montserrat',
                        }}>MMCLab</Text>
                        <Image

                            source={require('../assets/logo_mmclab.png')}
                        />

                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', }}>
                        <DateTime color='white'></DateTime>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-start', paddingBottom: 20 }} >

                        <TextInput
                            onChangeText={(text) => setName(text)}
                            style={{ textAlign: 'center', height: 40, borderColor: 'gray', borderRadius: 50, borderWidth: 2, backgroundColor: 'white', width: 300, alignSelf: 'center', opacity: 0.75, fontFamily: 'Montserrat', fontWeight: '900' }}
                            placeholder="Používateľ"
                            placeholderTextColor='black'


                        />
                        <TextInput
                            onChangeText={(text) => setPassword(text)}
                            style={{ textAlign: 'center', height: 40, borderColor: 'gray', borderRadius: 50, borderWidth: 2, backgroundColor: 'white', width: 300, alignSelf: 'center', opacity: 0.75, fontFamily: 'Montserrat', }}
                            placeholder="Heslo k miestnosti"
                            placeholderTextColor='black'

                            keyboardType='numeric'
                            secureTextEntry
                            maxLength={5}
                        />
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
                            opacity: 0.75,
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
