import { Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { ChatRoom } from '../src/models';
import { Users } from '../src/models';
import { ChatRoomUsers } from '../src/models';
import ChatRoomItem from '../Components/ChatRoomItem';
import { loadingBar } from '@aws-amplify/ui';
import { EvilIcons } from '@expo/vector-icons';

export default function Home({route, navigation}) {
    const [chatRooms, setchatRooms] = useState([])

    //const {user} = route.params || null;
    

    useEffect(() => {
        const getChatRooms = async () => {
            const data = (await DataStore.query(ChatRoomUsers)).filter(chatRoomUsers => chatRoomUsers.users.id === '7fafaec5-ecda-41fb-96b4-499030320f5d')
            .map(chatRoomUsers => chatRoomUsers.chatroom)
            setchatRooms(data)
        }
        getChatRooms()
    }, [])
    
    const pressHandler = () => {
            
        }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <Text style={styles.leftText}>
                    Chats
                </Text>
                <TouchableOpacity style={styles.newChat}>
                    <Text style={styles.newChatText}>
                        New Chat
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput>Search</TextInput>
            </View>
            <FlatList 
            data={chatRooms}
            renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            />
            <Button title="press" onPress={pressHandler}>Press</Button>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop: 15,

    },
    leftText: {
        color: 'gray',
        paddingTop: 7,
        fontSize: 25,

    },
    newChat: {
        borderRadius: 30,
        padding: 15,
        backgroundColor: '#dff0f1'
    },
    newChatText: {
        color: '#57726F'
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        margin: 10,
        padding: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset:{
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    }
    

})
