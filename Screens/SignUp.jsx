import { DataStore } from 'aws-amplify'
import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Users } from '../src/models'

export default function SignUp() {
    const [name, setName] = useState()

    const submit = async () => {
        console.log('submit')
        await DataStore.save(
            new Users({
                name: name
            })
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
            <View>
                <TextInput style={styles.input} placeholder='name' onChangeText={setName} value={name} />
            </View>

            <View>
                <TextInput placeholder='email' />
            </View>

            <View>
                <TextInput placeholder='name' />
            </View>

            <Button
            onPress={submit}
            title='Submit'
            />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4F9CDD',
        height: '100%',
        alignItems: 'center'
    },
    input: {
        borderBottomWidth: 0.5
    }
})
