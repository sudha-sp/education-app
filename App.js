import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import { useFonts, WorkSans_400Regular } from "@expo-google-fonts/work-sans";
import { Nunito_700Bold } from "@expo-google-fonts/nunito";
import About from './src/screens/About';
import UserData from './src/screens/UserData';

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
          {(props) => <Home {...props} channelName={"Education Hub"} />}
        </Stack.Screen>

         {/* About Screen  */}
         <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitleAlign: "center",
          }}
        />

        {/* UserData Screen  */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_700Bold",
            },
            headerTitle: "Students Data",
            headerTitleAlign: "center",
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


