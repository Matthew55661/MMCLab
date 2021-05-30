import { Text, View } from 'react-native';
import { useState, } from 'react'
import React, { useEffect, useContext } from 'react';
import { Context } from '../state/store';

export const DateTime = (props) => {

    const [date, setDate] = useState(new Date());
    const [state, dispatch] = useContext(Context);
    useEffect(() => {
        const timer = setInterval(() => {

            setDate(new Date())
            if (new Date().getHours() >= 18 || new Date().getHours() <= 6) {

                if (state.darkmode === false && state.auto === true) {
                    dispatch({ type: 'SET_DARKMODE', payload: true })
                }

                if (state.darkmode === true && state.auto === true) {
                    dispatch({ type: 'SET_DARKMODE', payload: true })
                }
            }
            else {
                if (state.darkmode === true && state.auto === false) {
                    dispatch({ type: 'SET_DARKMODE', payload: true })
                }
                if (state.darkmode === false && state.auto === false) {
                    dispatch({ type: 'SET_DARKMODE', payload: false })
                }
            }


        }, 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });


    return (
        <View>
            <Text style={{ fontSize: 35, color: props.color, fontFamily: 'Montserrat' }}>  {date.toLocaleTimeString()}</Text>
            <Text style={{ fontSize: 35, color: props.color, fontFamily: 'Montserrat' }}>  {date.toLocaleDateString()}</Text>

        </View>
    )

}

export default DateTime