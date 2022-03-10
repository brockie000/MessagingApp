import { DataStore } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import RequestsItem from '../Components/RequestsItem'
import { FriendRequests } from '../src/models'

export default function Requests() {
    const [requests, setRequests] = useState([])
    
    useEffect(() => {
        const getRequests = async () => {
            const data = (await DataStore.query(FriendRequests)).filter(requests => requests.Users.name === 'Fozzy')
            console.log(data)
            setRequests(data)
        }
        getRequests()
    }, [])

    return (
        <SafeAreaView>
            <View>
                <Text style={styles.leftText}>Friend Requests</Text>
            </View>

            <FlatList
            data={requests}
            renderItem={({ item }) => <RequestsItem requests={item} />} 
            />
        </SafeAreaView>
    )
}

const styles = ({
    leftText: {
        color: 'gray',
        paddingTop: 7,
        fontSize: 25,
        paddingHorizontal: 20,
        marginTop: 15,
    }
})