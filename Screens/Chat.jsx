import { DataStore, SortDirection } from 'aws-amplify';
import React, { useEffect, useState } from 'react'
import { FlatList, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import ChatRoomFriend from '../Components/ChatRoomFriend';
import MessageInput from '../Components/MessageInput';
import Messages from '../Components/Messages';
import { Message as MessageModel } from '../src/models';
import { ChatRoom } from '../src/models';

export default function Chat({route}) {
    const {friend} = route.params;
    const {ID} = route.params;
    const {AuthUser} = route.params;

    const [messages, setMessages] = useState([]);
    const [chatRoom, setChatRoom] = useState(null);

    useEffect(() => {
        const subscription = DataStore.observe(MessageModel).subscribe((msg) => {
          // console.log(msg.model, msg.opType, msg.element);
          if (msg.model === MessageModel && msg.opType === "INSERT") {
            setMessages((existingMessage) => [msg.element, ...existingMessage]);
          }
        });
    
        return () => subscription.unsubscribe();
      }, []);

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
        //const fetchedMessages = await (await DataStore.query(MessageModel)).filter(messages => messages.chatroomID == ID)
        const fetchedMessages = await DataStore.query(
            MessageModel,
            (message) => message.chatroomID("eq", chatRoom?.id),
            {
              sort: (message) => message.createdAt(SortDirection.DESCENDING),
            }
          );
          setMessages(fetchedMessages);
        };
    
    

    return (
        <SafeAreaView style={{flex: 1}}>
            
        <ChatRoomFriend friend={friend}/>
          
        <FlatList
        data={messages}
        renderItem={({item}) => <Messages friend={friend} newmessage={item} />}
        inverted
         />
        
        <MessageInput chatroom={chatRoom} AuthUser={AuthUser} friend={friend}/>
        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
       
        
})