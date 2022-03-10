import { DataStore } from '@aws-amplify/datastore'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { ChatRoom, ChatRoomUsers, Message } from '../src/models'
import { Users } from '../src/models'
import test from '../assets/avatar.jpg'
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment'
import {img} from '../assets/index'

export default function ChatRoomItem({chatRoom, AuthUser}) {
    const [friend, setFriend] = useState([])
    const [message, setMessage] = useState([null])
    const navigation = useNavigation()

    useEffect(() => {
        const getUsers = async () => {
            
            const data = (await DataStore.query(ChatRoomUsers)).filter(users => users.chatRoom.id === chatRoom.id).map(ChatRoomUsers => ChatRoomUsers.users)
            setFriend(data.find(users => users.id != AuthUser.id) || null);
            
        }
        getUsers()
    }, [])

    

    useEffect(() => {
        const getLastMessage = async () => {
            const data = (await DataStore.query(Message)).filter(message => message.id === chatRoom.chatRoomLastMessageId)
            const test = (data.pop(1,0))
            setMessage(test)
            
        }
        getLastMessage()
    }, [friend])

    const itemClicked = () => {
        navigation.navigate('Chat', {
            friend: friend,
            AuthUser: AuthUser,
            ID: chatRoom.id
        })
    }

    
    return (
        <Pressable onPress={itemClicked}>
        <View style={styles.container}>
            <View style={styles.imageContainer} >
            <Image style={styles.image} source={img}/>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.userName}>
                    {friend?.name}
                </Text>
                
                <Text style={styles.content}>
                    {message?.content}
                </Text>
            </View>

            <View style={styles.date}>
                <Text style={styles.dateText}>
                {moment(message?.createdAt).format('d MMM')}
                </Text>
                <View style={styles.newMessages}>
                    <Text style={styles.newMessagesText}>
                    {chatRoom?.newMessages || '0'}

                    </Text>
                </View>
                
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
        marginTop: 5,
    },
    dateText: {
        color: 'lightgray',
        fontSize: 12,
    },
    newMessages:{
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginTop: 4,
        width: 20,
        height: 20,
        borderRadius: 50,
        backgroundColor: 'lightblue'
    },
    newMessagesText:{
        color: 'white',
        marginTop: 1,
        marginLeft: 1,
    }
    
})