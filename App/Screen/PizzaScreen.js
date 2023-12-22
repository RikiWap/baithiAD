import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ImageBackground,
} from "react-native";
import Header from "../Components/Header";
import React from "react";
import { Dimensions } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Button from "../Components/Button";
import Variable from "../Utils/Variable";
import BgMenu1 from "../../assets/images/bg-menu-1.png";
import BgMenu2 from "../../assets/images/bg-menu-2.png";
import BgMenu3 from "../../assets/images/bg-menu-3.png";
import BgMenu4 from "../../assets/images/bg-menu-4.png";
import BgMenu5 from "../../assets/images/bg-menu-5.png";
import Cutlery from "../../assets/images/cutlery.svg";
import Clock from "../../assets/images/alarm-clock.svg";
import { Foundation } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    bg: BgMenu1,
    name: "Tropical Storm",
    description:
      "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    type: "Pizza",
    time: "15minus",
    star: 5,
  },
  {
    id: 2,
    bg: BgMenu2,
    name: "Tropical Storm",
    description:
      "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    type: "Pizza",
    time: "25minus",
    star: 2,
  },
  {
    id: 3,
    bg: BgMenu3,
    name: "Tropical Storm",
    description:
      "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    type: "Pizza",
    time: "15minus",
    star: 5,
  },
  {
    id: 4,
    bg: BgMenu4,
    name: "Tropical Storm",
    description:
      "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    type: "Pizza",
    time: "15minus",
    star: 5,
  },
  {
    id: 5,
    bg: BgMenu5,
    name: "Tropical Storm",
    description:
      "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
    type: "Pizza",
    time: "15minus",
    star: 5,
  },
];

const Item = ({ item, onPress }) => (
  <View onPress={onPress} style={[styles.item]}>
    <Image style={[styles.image]} source={item.bg} resizeMode="cover" />
    <View style={styles.content}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 16 }}>
        {item.name}
      </Text>
      <Text style={{ width: 200, flex: 1 }}>{item.description}</Text>
      <View style={{display :'flex', flexDirection : 'row', justifyContent: 'space-around'}}>
        <View style={styles.flex}>
          <Cutlery />
          <Text style={{color: Variable.GRAY}}>{item.type}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={{color: Variable.GRAY}}>
          {item.time}
          </Text>
          <Clock />
        </View>
      </View>
    </View>
    <View style={styles.start}>
      <Text style={{ color: "#E9BC08" }}>
        <Foundation name="star" size={20} color="#E9BC08" />
        {item.star}
      </Text>
    </View>
  </View>
);

const PizzaScreen = () => {
  const { width: screenWidth } = Dimensions.get("window").width;
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("list-pizza")
};

  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => navigation.navigate("pizza")} />;
  };

  return (
    <View style={styles.container}>
      <View>
        <Header isShowBg={true} title={'PIZZA'}/>
      </View>
      <View style={styles.wrapperList}>
        <View>
          <Text>18 Disher</Text>
        </View>
        <Button
          title={"See All"}
          iconName={() => (
            <AntDesign
              name="right"
              size={20}
              color="white"
              style={{ marginLeft: 5 }}
            />
          )}
          color="default"
          styleProps={{}}
          onPress={handlePress}
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        // extraData={selectedId}
      />
      <Button
        title={'CREATE YOUR OWNER'}
        iconName={''}
        onPress={handlePress}
        styleProps={{
          position: 'absolute',
          bottom: 40,
          left : '25%',
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.30,
          shadowRadius: 4.65,

          elevation: 8,
       }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position : 'relative',
  },
  item: {
    width: "100%",
    marginHorizontal: 20,
    marginVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    objectFit: "cover",
  },
  bgSlider: {
    height: 500,
    // flex: 1
  },
  wrapperList: {
    marginTop: 200,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  star: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },
  flex:{
    display: 'flex',
    flexDirection :'row',
    alignItems :'center',
    gap : 5
  }
});

export default PizzaScreen;
