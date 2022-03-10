import { DataStore } from '@aws-amplify/datastore'
import React, { useState } from 'react'
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react/cjs/react.development'
import tw from 'tailwind-react-native-classnames'
import { Users } from '../src/models'
import {faceID} from '../assets/index'
import { Test } from '../src/models'

export default function LoginScreen({navigation}) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [login, setLogin] = useState(null)
    const [password, setPassword] = useState(null)
    const [button, setButton] = useState(false)
    

    useEffect(() => {
        const getUsers = async () => {
            const data = (await DataStore.query(Users)).filter(users => users.name === login)
            const AuthUser = data.pop(1,0)
            
            if(AuthUser){
                navigation.navigate('Home', {
                AuthUser: AuthUser})
                
            }else{
                setButton(false)
             
            }
            

            
        }
        getUsers()
    }, [button])

    const loginButton = () => {
        setButton(true)
        /*
        setUser(users.filter((users) => users.name === login));
        const AuthUser = user.pop(1,0)
        console.log(AuthUser)
        setLogin("")

        
        
        if(!AuthUser){
            
            //navigation.navigate('Home')
        }
        else{
            
        navigation.navigate('Home', {
            user: AuthUser
        })
    }*/
        
    }

    const signUpButton = () => {
        navigation.navigate('SignUp')
    }

    const faceIDButton = () => {
        navigation.navigate('Home', {
            //user: AuthUser
        })
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.text}>
                <Text style={styles.text1Colour}>Welcome Back!</Text>
                <Text style={styles.text2Colour}>Login To Access Home</Text>
            </View>

            <View style={styles.imageContainer}>
                <Pressable onPress={faceIDButton}>
                <Image style={styles.image} source={{uri: 'https://static.thenounproject.com/png/1280936-200.png'}}/> 
                </Pressable>
            </View>

            <View style={styles.orContainer}>
                <Text style={styles.orText}>or</Text>
            </View>
            
            <View style={styles.userNameContainer}>
                <TextInput 
                placeholder="User Name..." 
                onChangeText={setLogin}
                value={login}
                style={styles.userNameInput}/>
            </View>

            <View style={styles.userNameContainer}>
                <TextInput 
                placeholder="Password..." 
                onChangeText={setPassword}
                value={password}
                style={styles.userNameInput}/>
            </View>

            <View style={styles.centerContainer}>
                <View style={styles.loginContainer}>
                    <Button 
                    style={styles.loginButton}
                    title="login"
                    onPress={loginButton}
                />
                </View>
            </View>

            <View style={styles.centerContainer}>
                <View style={styles.loginContainer}>
                    <Button 
                    style={styles.loginButton}
                    title="Sign Up"
                    onPress={signUpButton}
                />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#4F9CDD',
        height: '100%'
    },
    text:{
        marginTop: 30,
        alignItems: 'center',
    },
    text1Colour: {
        color: 'white',
        fontSize: 50,
        fontWeight: '300'
    },
    text2Colour:{
        marginTop: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '300'
    },
    image:{
        marginTop: 100,
        height: 100,
        width: 100,
        tintColor: 'lightgray',

    },
    imageContainer: {
        alignItems: 'center'
    },
    orContainer: {
        alignItems: 'center',
        marginTop: 35,
    },
    orText: {
        color: 'lightgray',
        fontSize: 15
    },
    userNameContainer: {
        marginTop: 35,
        alignItems: 'center',
        color: 'lightgray'
    },
    userNameInput: {
        borderBottomWidth: 0.5,
        width: '70%',
        color: 'lightgray',
        fontSize: 20
    },
    centerContainer: {
        alignItems: 'center',
        marginTop: 60,
    },
    loginContainer: {
        backgroundColor: 'blue',
        borderRadius: 30,
        
        width: 100
    },
    loginButton: {
       
    }


})