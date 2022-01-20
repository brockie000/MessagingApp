import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Users } from '../src/models';
import FriendsItem from '../Components/FriendsItem';

export default function Friends() {
    const [friends, setFriends] = useState([])

    useEffect(() => {
        const getFriends = async () => {
            const friends = (await DataStore.query(Users)).filter(users => users.id === '7fafaec5-ecda-41fb-96b4-499030320f5d').map(Users => Users.friends)
            const data = (friends.pop(1,0))
            setFriends(data)
        }
        getFriends()
    }, [])
    return (
        <SafeAreaView>
            <View style={styles.top}>
                
                <Text style={styles.leftText}>
                    Friends
                </Text>

                <TouchableOpacity style={styles.newChat}>
                    <Ionicons name="person-add" size={24} color="black" />
                </TouchableOpacity>
             
            </View>

            <FlatList 
            data={friends}
            renderItem={({ item }) => <FriendsItem friend={item} />}
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
    }

})
