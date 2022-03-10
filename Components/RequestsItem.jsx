import { DataStore } from 'aws-amplify'
import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {img} from '../assets/index'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Users } from '../src/models';



export default function RequestsItem({requests}) {
    const [user, setUser] = useState()

    useEffect(() => {
        const getUser = async() => {
            const data = await DataStore.query(Users)
            //setUser(user)
            console.log(data)
        }
        getUser()
    }, [])

    
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer} >
        <Image style={styles.image} source={img}/>
        </View>

        <View style={styles.middleContainer}>
            <Text style={styles.userName}>
                {user?.name}
            </Text>
        </View>

        <View style={styles.date}> 

        <TouchableOpacity style={styles.newChat} >
            <AntDesign name="checkcircle" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.newChat}>
        <Entypo style={{marginTop: -2 }} name="circle-with-cross" size={28} color="black" />
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
    flexDirection: 'row',
    marginTop: 25.5,
    marginRight: 10,
    justifyContent: 'space-between',
    width: 60,
}

})