import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Foundation, FontAwesome } from '@expo/vector-icons';
import {img} from '../assets/index'

export default function ChatRoomFriend({friend}) {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.imageContainer} >
            <Image style={styles.image} source={img}/>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.userName}>
                    {friend.name}
                </Text>

                <Text style={styles.lastSeen}>
                    Last seen at
                </Text>
            </View>

            <View style={styles.callButtons}>
                <View>
                    <Foundation name="video" size={24} color="black" />
                </View>

                <View>
                    <FontAwesome name="phone"  size={20} color="black" />
                </View>
                
            </View>

            
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 75,
        margin: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,       
        elevation: 9,
    },
    imageContainer: {
        flex: 1,    
    },
    image: {
        marginTop: 13,
        height: 50,
        width: 50,
        borderRadius: 50
    },
    middleContainer: {
        flex: 3,
    },
    userName: {
        marginTop: 10,
        fontSize: 18,
        color: '#585E5C',
        fontWeight: '600',   
    },
    lastSeen:{
        marginTop: 5,
        color: 'lightgray'
    },
    callButtons: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 25,
    }
    
   
    
})
