import { View, Text, StyleSheet, Image, ScrollView, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../Components/Header";
import FullPizza from "../../assets/images/FullPIzza.png";
import Variable from "../Utils/Variable";

const DATA = [
  {
    id: 1,
    name: "Shrimp",
    price: "$1.61",
  },
  {
    id: 2,
    name: "Onion",
    price: "$0.32",
  },
  {
    id: 3,
    name: "Pineapple",
    price: "$0.65",
  },
  {
    id: 4,
    name: "Green Pepper",
    price: "$0.40",
  },
  {
    id: 5,
    name: "Cheesy mayo sauce",
    price: "$1.23",
  },
  {
    id: 6,
    name: "Mozzarella",
    price: "$2.50",
  },
  {
    id: 7,
    name: "Crab Stick",
    price: "$5.50",
  },
];

const Item = ({ item, onPress }) => (
<View style={styles.flex} key={item.id}>
              <Text style={styles.fullW}>{item.name}</Text>
              <Text style={styles.fullW}>{item.price}</Text>
            </View>
)

const Step2Screen = () => {
    const renderItem = ({ item }) => {
        return <Item item={item} onPress={() =>{}} />;
      };
  return (
    <View>
      <Header isShowBg={true} title={"STEP 2"} />
      <ScrollView>
        <View style={styles.wrapperList}>
          <Image source={FullPizza} style={{ marginTop: 10 }} />
        </View>
        <Text style={styles.title}>What your add</Text>
        <View style={{ paddingHorizontal: 30 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convert id to string
          // extraData={selectedId}
        />
        </View>
        <Text style={styles.title}>Other option</Text>
        <View style={{ paddingHorizontal: 30 }}>
          <View style={styles.flex}>
            <Text style={styles.fullW}>Quantity</Text>
            <Text style={styles.fullW}>1</Text>
          </View>
          <View style={styles.flex}>
            <Text style={styles.fullW}>Size</Text>
            <Text style={styles.fullW}>large</Text>
          </View>
          <Text style={styles.title}>Total</Text>
        </View>
      <TouchableOpacity style={[styles.buttonMain]}>
            <Text style={styles.textBtn}>Step 3</Text>
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperList: {
    marginTop: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  flex: {
    // display:'flex',
    width: "100%",
    flexDirection: "row",
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBlockColor: Variable.GRAY,
  },
  fullW: {
    // flex: 1,
    width: "90%",
    color: Variable.GRAY,
  },
  buttonMain:{
    width: '100%',
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: Variable.PRIMARY,
    padding: 10,
    marginVertical: 30,
    borderRadius: 10
  },
  textBtn:{
    fontSize: 16,
    color: Variable.WHITE,
    fontWeight: 'bold'
  },
});

export default Step2Screen;
