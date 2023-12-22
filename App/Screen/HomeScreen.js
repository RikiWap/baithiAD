import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../Utils/Variable';
import Bg from "../../assets/images/bg.png";
import Button from '../Components/Button';
import { AntDesign } from "@expo/vector-icons"; 
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handlePress = () => {
      navigation.navigate("menu");
  };


  return (
    <View>
    <View style={styles.container}> 
    <Image
      source={{
        uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/5854ede12142e219503ea64f04b2f75b73c1bc6a66ac09f90aec8f48484e0f4d?",
      }}
      style={styles.image1}
    />
  <Button
  title={'START ORDER'}
   iconName={() => <AntDesign name="right" size={20} color="white" style={{marginLeft: 5}} />}
   color='default'
   styleProps={{
      position: 'absolute',
      bottom: 40,
      left: 20
   }}
   onPress={handlePress}
 />
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.PRIMARY,
    // height: 250,
    // paddingTop: 50,
    // paddingHorizontal: 10
  },
  image1: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    aspectRatio: "0.46",
  },
});

export default HomeScreen