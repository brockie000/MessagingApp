import { Button, FlatList, Pressable, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import React, { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore';
import { ChatRoom, Users, ChatRoomUsers } from '../src/models';
import ChatRoomItem from '../Components/ChatRoomItem';
import { loadingBar } from '@aws-amplify/ui';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'





export default function Home({route, navigation}) {
    const [chatRooms, setchatRooms] = useState([])

    const {AuthUser} = route.params || null;
    

    useEffect(() => {
        const getChatRooms = async () => {
        console.log(AuthUser)
        const chatRooms = (await DataStore.query(ChatRoomUsers))
        .filter(
          (chatRoomUser) => chatRoomUser.users.id === AuthUser.id
        )
        .map((chatRoomUser) => chatRoomUser.chatRoom);

      setchatRooms(chatRooms);
            //const data = await (await DataStore.query(ChatRoom)).filter(chatroom => chatroom.chatRoomOwnerId === user.id || chatroom.chatRoomFriendId === user.id )
                //.users.id === user.id) && (chatRoomUsers.chatroom.messages != null)).map(chatRoomUsers => chatRoomUsers.chatroom)
            //console.log('h',data)
            
        }
        getChatRooms()
    }, [])
    
    const pressHandler = () => {
            
        }

    const chats = () => {
        navigation.navigate('Friends', {
            AuthUser: AuthUser,
        })

    }

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.top}>
                
                <Text style={styles.leftText}>
                    Chats
                </Text>
                <TouchableOpacity onPress={chats} style={styles.newChat}>
                    <Text style={styles.newChatText}>
                        New Chat
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.searchBar}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput 
                style={{width: '100%'}}
                placeholder='Search'>
                </TextInput>
            </View>
            
            <FlatList 
            data={chatRooms}
            renderItem={({ item }) => <ChatRoomItem AuthUser={AuthUser} chatRoom={item} />}
            />
            <Button title="press" onPress={pressHandler}>Press</Button>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        
    },
    top: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 15,

    },
    leftText: {
        color: 'gray',
        paddingTop: 7,
        fontSize: 25,

    },
    newChat: {
        borderRadius: 30,
        padding: 12,
        backgroundColor: '#dff0f1'
    },
    newChatText: {
        color: '#57726F'
    },
    searchBar: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginHorizontal: 20,
        paddingHorizontal: 20,
        margin: 10,
        padding: 15,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        
        elevation: 9,
    }
    

})
