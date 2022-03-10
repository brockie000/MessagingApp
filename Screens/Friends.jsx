import React, { useEffect, useState } from 'react'
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { ChatRoomUsers, Users } from '../src/models';
import FriendsItem from '../Components/FriendsItem';

export default function Friends({navigation, route}) {
    const [friends, setFriends] = useState([])

    const {AuthUser} = route.params || null;

    useEffect(() => {
        const getChatRooms = async () => {
            console.log(AuthUser)
            const data = (await DataStore.query(ChatRoomUsers)).filter(chatRoomUsers => chatRoomUsers.users.id === AuthUser.id)
            .map(chatRoomUsers => chatRoomUsers.chatRoom)
            setFriends(data)
        }
        getChatRooms()
    }, [])

    const newFriend = () => {
        navigation.navigate('Add')
    }

    const Requests = () => {
        navigation.navigate('Requests')
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
            <Pressable onPress={Requests}>
                <View style={styles.requests}>
                    <Text>Friend Requests</Text>
                </View>
            </Pressable>

            <FlatList 
            data={friends}
            renderItem={({ item }) => <FriendsItem AuthUser={AuthUser} chatRoom={item} />}
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
