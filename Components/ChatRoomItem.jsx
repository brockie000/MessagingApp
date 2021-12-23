import { DataStore } from '@aws-amplify/datastore'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import { ChatRoomUsers } from '../src/models'
import { Users } from '../src/models'

export default function ChatRoomItem({chatRoom}) {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            const data = (await DataStore.query(ChatRoomUsers)).filter(users => users.chatroom.id === chatRoom.id).map(ChatRoomUsers => ChatRoomUsers.users)
            
            

            setUsers(data.find(users => users.id !== '7fafaec5-ecda-41fb-96b4-499030320f5d') || null);
            console.log("USERRRRRRS", users)
        }
        getUsers()
    }, [])

    
    return (
        <View style={styles.container} >
            <Text >
                {users.name}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 30,
        margin: 10,
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