import React, { useEffect, useState } from 'react'
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {img} from '../assets/index'
import { Ionicons } from '@expo/vector-icons';
import { DataStore } from 'aws-amplify';
import { Users } from '../src/models';
import { FriendRequestsUsers } from '../src/models';
import { ChatRoomUsers } from '../src/models';

export default function SearchItem({user}) {
    const [request, setRequest] = useState(false)
    const [outgoing, setOutgoing] = useState([])

    useEffect(() => {
        const getState = async () => {
            const data = await DataStore.query(FriendRequestsUsers)
            const test1 = await DataStore.query(ChatRoomUsers)
            const test = (data.pop(1,0))
            const data1 = data.pop(0,1)
            setOutgoing(test)
            console.log(outgoing)
            outgoing.forEach(
                console.log(outgoing.users.id)
            );
            //console.log(test1)
            //test needs to be changed to usernames
            /*if(test.includes('test')){
                setRequest(true)
            }*/
        }
        getState()
    }, []) 

    const addFriend = async () => {
        const original = await DataStore.query(Users, user.id);
        console.log(original)
        setRequest(true)
        
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
            <Image style={styles.image} source={img}/>
            </View>

            <View style={styles.middleContainer}>
                <Text style={styles.userName}>
                    {user.name}
                </Text>
            </View>

            <View style={styles.date}> 
            <TouchableOpacity style={styles.newChat} onPress={addFriend}>     
                {request?  <Ionicons name="arrow-forward-circle" size={24} color="black" /> : <Ionicons name="person-add" size={24} color="black" />}
                
            </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        height: 75,
        margin: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.1,
        shadowRadius: 7,
        
        elevation: 9,
    },
    imageContainer: {
        flex: 1,
       
        
        
    },
    image: {
        marginTop: 13,
        height: 50,
        width: 50,
        borderRadius: 50
    },
    middleContainer: {
        flex: 3,
        
        
    },
    userName: {
        marginTop: 27.5,
        fontSize: 18,
        color: '#585E5C',
        fontWeight: '600',   
    },
    content: {
        color: 'lightgray',
        marginTop: 5,
    },
    date: {
        marginTop: 25.5,
        marginRight: 10,
    }
    
})