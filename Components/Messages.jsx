import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Messages({message}) {
    const isMe = message.usersID == '7fafaec5-ecda-41fb-96b4-499030320f5d';
    return (
        <SafeAreaView>
            <View style={[styles.container, {
            backgroundColor: isMe ? '#3777f0' : 'lightgray',
            marginLeft: isMe ? 'auto' : 10,
            marginRight: isMe ? 10 : 'auto'
        }]}>
            <Text style={{ color: isMe ? 'white' : 'black'}}>{message.content}</Text>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3777f0',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        width: '75%',
        marginLeft: 'auto',
    },
    text: {
        color: 'white',
    }
})