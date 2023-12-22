import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import TabNavigation from "./App/Navigations/TabNavigation";
import { NavigationContainer } from '@react-navigation/native';
// import { MyDrawer } from './App/Navigations/DrawNavigation';
export default function App() {
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-light": require("./assets/fonts/Outfit-Light.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
  });
  return (
      <View style={styles.container}>
        <NavigationContainer>    
          {/* <MyDrawer/> */}
              <TabNavigation/>
          </NavigationContainer>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
});
