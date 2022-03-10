import { DataStore } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ChatRoomUsers, Users } from '../src/models'
import {img} from '../assets/index'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

export default function FriendsItem({chatRoom, AuthUser}) {
    const navigation = useNavigation()
    const [friend, setFriend] = useState()

    useEffect(() => {
        const getUsers = async () => {
            const data = (await DataStore.query(ChatRoomUsers)).filter(users => users.chatRoom.id === chatRoom.id).map(ChatRoomUsers => ChatRoomUsers.users)
            setFriend(data.find(users => users.id != AuthUser.id) || null);
        }
        getUsers()
    }, [])

    const onPress = () => {
        navigation.navigate('Chat', {
            friend: friend,
            ID: chatRoom.id
        })
    }

    return (
            <Pressable onPress={onPress}>
        <View style={styles.container}>
            <View style={styles.imageContainer} >
            <Image style={styles.image} source={img}/>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.userName}>
                    {friend?.name}
                </Text>

                <Text style={styles.content}>
                    {friend?.status}
                </Text>
                
                
            </View>

            <View style={styles.date}> 
            <TouchableOpacity style={styles.newChat}>     
                <MaterialIcons name="more-horiz" size={35} color="black" />
            </TouchableOpacity>
            </View>
        </View>
        </Pressable>
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
    content: {
        color: 'lightgray',
        marginTop: 5,
    },
    date: {
        marginTop: 20,
    }
    
})