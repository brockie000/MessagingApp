import React, { useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useState } from 'react/cjs/react.development';
import { DataStore } from 'aws-amplify';
import { Users } from '../src/models';
import SearchItem from '../Components/SearchItem';

export default function Search() {
    const [search, setSearch] = useState(null)
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        const getUsers = async () => {
            const data = (await DataStore.query(Users)).filter(users => users.name === search)
            setUsers(data)
        }
        getUsers()
    }, [search])

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>
                    Search For Friends
                </Text>
            </View>
          
            <View style={styles.searchBar}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput 
                onChangeText={setSearch}
                value={search}
                style={{width: '100%'}}
                placeholder='Search'>
                </TextInput>
            </View>

            <FlatList
                data={users}
                renderItem={({ item }) => <SearchItem user={item} />}
            />

          
     
        </SafeAreaView>
    )
}

const styles = {
    container: {
        backgroundColor: 'white',
        flex: 1,
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
}
