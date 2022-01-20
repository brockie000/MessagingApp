import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

export default function MessageInput() {
    return (
        <View style={styles.container}>

            <View style={styles.buttons}>
                <FontAwesome name="camera" size={24} color="black" />
            </View>

            <View style={styles.input}>
                <TextInput>
                    
                </TextInput>
            </View>

            <View>
                <Text>
                    +
                </Text>
            </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgray',
        height: 80,
        display: 'flex',
        flexDirection: 'row'
    },
    buttons: {
        marginTop: 23,
        marginLeft: 15,
    },
    input:{
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginVertical: 12,
        flex: 1,
        borderRadius: 20,
    }

})