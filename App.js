import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  let [fontsLoaded] = useFonts({
    WorkSans_400Regular,
    Nunito_700Bold,
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {(props) => <Home {...props} channelName={"Thapa Technical"} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


