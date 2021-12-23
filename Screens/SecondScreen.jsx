import { Button, StyleSheet, Text, View } from 'react-native';

import React from 'react'



export default function SecondScreen({navigation, route}) {
    const {name} = route.params;

    return (
        <View>
            <Text>{name}</Text>
            <Button title="go Home" onPress={() => navigation.navigate('Home')}/>
        </View>
    )
}

