import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Home from '../Screens/Home'
import LoginScreen from '../Screens/LoginScreen'
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return(
        <Tab.Navigator screenOptions={{
            
        }}>
        <Tab.Screen name="Login" component={LoginScreen} options={{
    headerShown: false}}/>
        <Tab.Screen name='Home' component={Home} options={{
    headerShown: false
    }} />
        
        </Tab.Navigator>
    )
}

export default BottomTab;

const styles = StyleSheet.create({
    Main: {
        backgroundColor: 'pink'
    }
})