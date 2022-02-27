import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function AddFriends({navigation}) {

    const searchButton = () => {
        
        navigation.navigate('Search')
    }

    return (
        <View style={styles.container}>
            <View style={styles.new}>
                <TouchableOpacity style={styles.search} onPress={searchButton}>
                    <Text>
                        search
                    </Text> 
                </TouchableOpacity>
            </View>

            <View style={styles.new}>
                <TouchableOpacity style={styles.newButton}>
                    <Text>
                        Meet new Friends
                    </Text>
                </TouchableOpacity>          
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
        container: {
            height: '100%'
        },
        new: {
            backgroundColor: 'white',
            height: '50%',
            justifyContent: 'center',
            alignItems: 'center'
        },
        newButton: {

            backgroundColor: 'blue',
            justifyContent: 'center',
            width: '70%',
            height: '70%',
            borderRadius: 20,
            alignItems: 'center'
        },
        search: {
            backgroundColor: 'green',
            justifyContent: 'center',
            width: '70%',
            height: '70%',
            borderRadius: 20,
            alignItems: 'center'
        }
})
