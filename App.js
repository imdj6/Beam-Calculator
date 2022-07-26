import { TailwindProvider } from "tailwindcss-react-native";
import HomeScreen from './screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SinglyScreen from "./screens/SinglyScreen";
import DoublyScreen from "./screens/DoublyScreen";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <TailwindProvider>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name='singly' component={SinglyScreen}/>
        <Stack.Screen name='doubly' component={DoublyScreen}/>
    </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}

