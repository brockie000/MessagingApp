import { createStackNavigator } from '@react-navigation/stack';
import SecondScreen from '../Screens/SecondScreen';

import Home from '../Screens/Home'
import { Button } from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Chat from '../Screens/Chat';
import Friends from '../Screens/Friends';
import AddFriends from '../Screens/AddFriends';
import Search from '../Screens/Search';
import SignUp from '../Screens/SignUp';
import Requests from '../Screens/Requests';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyStack = () => {
return (
<Stack.Navigator>
<Stack.Screen name="Login" component={LoginScreen}
options={{
    headerShown: false,
}}/>
<Stack.Screen name="SignUp" component={SignUp}
options={{
    headerShown: false,
}}/>
<Stack.Screen 
name="Home" 
component={Home}
options ={{
    headerShown: false,
    headerRight: () => (
        <Button
        
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#000"
        />
      ),
}} />
<Stack.Screen name="Chat" component={Chat} options ={{
    headerShown: false,
    }}/>
<Stack.Screen name="Friends" component={Friends} options ={{
    headerShown: false,
    }}/>
<Stack.Screen name="Add" component={AddFriends} options ={{
    headerShown: false,
    }}/>
<Stack.Screen name="Search" component={Search} options ={{
    headerShown: false,
    }}/>
<Stack.Screen name="Requests" component={Requests} options ={{
    headerShown: false,
    }}/>


</Stack.Navigator>


)
}
export default MyStack