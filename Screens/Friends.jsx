import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { ChatRoomUsers, Users } from '../src/models';
import FriendsItem from '../Components/FriendsItem';

export default function Friends({navigation}) {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getChatRooms = async () => {
            const data = (await DataStore.query(ChatRoomUsers)).filter(chatRoomUsers => (chatRoomUsers.users.id === '7fafaec5-ecda-41fb-96b4-499030320f5d'))
            .map(chatRoomUsers => chatRoomUsers.chatroom)
            setFriends(data)
        }
        getChatRooms()
    }, [])

    const newFriend = () => {
        navigation.navigate('Add')
    }
    return (
        <SafeAreaView>
            <View style={styles.top}>
                
                <Text style={styles.leftText}>
                    Friends
                </Text>

  
                <TouchableOpacity onPress={newFriend} style={styles.newChat}>
                    <Ionicons name="person-add" size={24} color="black" />
                </TouchableOpacity>
             
            </View>
            <View style={styles.requests} >
                <Text>Friend Requests</Text>
            </View>

            <FlatList 
            data={friends}
            renderItem={({ item }) => <FriendsItem chatRoom={item} />}
            />
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
    requests: {
        height: 25,
        backgroundColor: 'red',
    }

})
