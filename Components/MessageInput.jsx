import React, { useState } from 'react'
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import {
    SimpleLineIcons,
    Feather,
    MaterialCommunityIcons,
    AntDesign,
    Ionicons,
  } from "@expo/vector-icons";
import { ChatRoom, Message } from '../src/models';
import { DataStore } from 'aws-amplify';

 

export default function MessageInput({friend, chatroom, AuthUser}) {
    const [message, setMessage] = useState("");

    const sendMessage = async () => {
        //change to have id of person using app
        const newMessage = await DataStore.save(
            new Message({
              content: message, // <- this messages should be encrypted
              usersID: AuthUser.id,
              chatroomID: chatroom.id,
            })
          );
        
    }

    const updateChatroom = async () => {
        DataStore.save(
            ChatRoom.copyOf(chatroom, (updatedChatRoom) => {
                updatedChatRoom.messages = chatroom.messages + 1
            })
        )
    }

    const sendButton = () => {
        if(!message){
           console.log(chatroom.id)
            return
        }else{

        
        sendMessage()
        updateChatroom()
        setMessage("")
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}>

            <View style={styles.buttons}>
                <FontAwesome name="camera" size={24} color="black" />
            </View>

            <TextInput style={styles.input} 
            value={message}
            onChangeText={setMessage}
            placeholder="Enter Message..."
            />

            <View>
            <Pressable onPress={sendButton} style={styles.buttonContainer}>
            {message ? (
                <Ionicons name="send" size={18} color="white" />
            ) : (
                <AntDesign name="plus" size={24} color="white" />
            )}
        </Pressable>
            </View>
            
            
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        borderColor: '#dedede',
        marginBottom: 1,
    },
    buttons: {
        marginTop: 23,
        marginLeft: 15,
    },
    input:{
        backgroundColor: 'gray',
        marginHorizontal: 20,
        marginVertical: 20,
        flex: 1,
        borderRadius: 20,
    },
    buttonContainer:{
        marginTop: 23,
        marginRight: 10,
        width: 40,
        backgroundColor: '#3777f0',
        height: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"


    }

})