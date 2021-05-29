import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react'

export const DateTime = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
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