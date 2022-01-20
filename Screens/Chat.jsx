import { DataStore } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import ChatRoomFriend from '../Components/ChatRoomFriend';
import MessageInput from '../Components/MessageInput';
import Messages from '../Components/Messages';
import { Message as MessageModel } from '../src/models';
import { ChatRoom } from '../src/models';

export default function Chat({route}) {
    const {user} = route.params;
    const {ID} = route.params;

    const [messages, setMessages] = useState([]);
    const [chatRoom, setChatRoom] = useState(null);

    useEffect(() => {
        fetchChatRooms()
    }, [])
    useEffect(() => {
        if(!chatRoom){
            return;
        }else{
        fetchMessages()
        }
    }, [chatRoom])

    const fetchChatRooms = async () => {
        if(!ID){
            return;
        }
        const chatRoom = await DataStore.query(ChatRoom, ID)
        if(!chatRoom){
            console.warn('no chatroom')
        }else{
            setChatRoom(chatRoom)
        }
    }

    const fetchMessages = async () => {
        if(!chatRoom){
            return;
        }
        const fetchedMessages = await (await DataStore.query(MessageModel)).filter(messages => messages.chatroomID == ID)
        setMessages(fetchedMessages);
    }

    return (
        <SafeAreaView>
          
            <View>
                <ChatRoomFriend friend={user}/>
            </View>

            <View style={styles.chatContainer}>

                <View style={styles.messages}>
        
                    <FlatList
                    
                    data={messages}
                    renderItem={({item}) => <Messages message={item} />}
                    />
                </View>
            

                <View style={styles.input}>
                    <MessageInput/>
                   
     
                </View>
            </View>
  
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        chatContainer: {
            height: '90%',
            justifyContent:'space-between'
        },
        messages: {
            marginBottom: 80,
            width: '100%',
            position: 'absolute',
            bottom: 0,
        },
        input: {
            width: '100%',
            position: 'absolute',
            bottom: 0,
        }
        
})