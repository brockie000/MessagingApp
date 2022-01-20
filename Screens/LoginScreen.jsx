import { DataStore } from '@aws-amplify/datastore'
import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useEffect } from 'react/cjs/react.development'
import tw from 'tailwind-react-native-classnames'
import { Users } from '../src/models'

export default function LoginScreen({navigation}) {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState([])
    const [login, setLogin] = useState({})
    

    useEffect(() => {
        const getUsers = async () => {
            const data = (await DataStore.query(Users)).map(users => users)
            setUsers(data)
            
        }
        getUsers()
    }, [login])

    const loginButton = () => {
        setUser(users.filter((users) => users.name === login) || null);
        const AuthUser = user.pop(1,0)

        
        
        if(!AuthUser){
            
            navigation.navigate('Home')
        }
        else{
            
        navigation.navigate('Home', {
            user: AuthUser
        })
    }
        
    }
    return (
        <SafeAreaView style={tw.style('bg-green-300 h-full')}>

            <View style={tw.style('items-center mt-4')}>
                <Text style={tw.style('text-4xl text-white')}>Welcome Back</Text>
            </View>
            
            <View style={tw.style('items-center border-b')}>
                <TextInput 
                placeholder="login" 
                onChangeText={setLogin}
                value={login}
                style={tw.style(' w-2/3 text-center text-lg font-semibold rounded-lg h-10')}/>
            </View>
            
            <Button 
            title="login"
            onPress={loginButton}
            />
        </SafeAreaView>
    )
}
