import React, { useState } from 'react';
import Header from '../Components/Header';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import BgMenu1 from '../../assets/images/bg-menu-1.png';
import BgMenu2 from '../../assets/images/bg-menu-2.png';
import BgMenu3 from '../../assets/images/bg-menu-3.png';
import BgMenu4 from '../../assets/images/bg-menu-4.png';
import BgMenu5 from '../../assets/images/bg-menu-5.png';
import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: 1,
    bg: BgMenu1,
    text: "Pizza",
  },
  {
    id: 2,
    bg: BgMenu2,
    text: "Pasta",
  },
  {
    id: 3,
    bg: BgMenu3,
    text: "Salads",
  },
  {
    id: 4,
    bg: BgMenu4,
    text: "Dessert",
  },
  {
    id: 5,
    bg: BgMenu5,
    text: "Beverage",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Image
      style={[styles.image]}
      source={item.bg}
      resizeMode="cover"
    />
  </TouchableOpacity>
);

const Menu = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState();

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => navigation.navigate("pizza")}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Header isShow={false}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
  },
  image: {
    width: '100%',
  },
});

export default Menu;
