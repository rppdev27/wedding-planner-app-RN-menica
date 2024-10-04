import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';

// Context API
// import { AuthContext } from './context/authContext'
import { AuthContext } from './context/authContext'

// Style
import { styles } from './styles';

// Screen
import LoginScreen from './components/screen/LoginScreen';
import SignupScreen from './components/screen/SignupScreen';
import HomeScreen from './components/screen/HomeScreen';
import GuestScreen from './components/screen/GuestScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthContext.Provider value='345'>
      <NavigationContainer> 
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
          >
          </Stack.Screen>
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
          >
          </Stack.Screen>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'Beranda' 
            }}
          />
          <Stack.Screen 
            name="Guest"
            component={GuestScreen}
            options={{
              title: 'Daftar Tamu'
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}