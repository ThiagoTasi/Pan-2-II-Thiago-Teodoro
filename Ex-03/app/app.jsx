import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';   


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"   
 component={index} /> // Your first page
        <Stack.Screen name="Africa" component={africa} /> // Your second page
      </Stack.Navigator>
    </NavigationContainer>
  );
}