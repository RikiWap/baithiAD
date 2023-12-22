import { View, Text, StyleSheet, Image, FlatList, Modal,TouchableOpacity, ScrollView, TextInput } from "react-native";
import React from "react";
import Header from "../Components/Header";
import Variable from "../Utils/Variable";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import PizzaIcon from "../../assets/images/pizza-png-13.png";
import EditPizza from "../../assets/images/editPizza.png";
import { useState } from "react";
import BookingSize from "../Components/BookingSize";
import InputSelector from "../Components/InputSelector";
import ListTopping from "../Components/ListTopping";
import Button from "../Components/Button";

import Shirmp from "../../assets/images/topping/shrimp.svg";
import Bacon from "../../assets/images/topping/bacon.svg";
import MushRoom from "../../assets/images/topping/mushroom.svg";
import Onion from "../../assets/images/topping/onion.svg";
import Sausage from "../../assets/images/topping/sausage.svg";
import Cheese from "../../assets/images/topping/cheese.svg";
import Olives from "../../assets/images/topping/olives.svg";
import Chicken from "../../assets/images/topping/chicken-leg.svg";

const DATA = [
  {
    id: 1,
    image: PizzaIcon,
  },
  {
    id: 2,
    image: PizzaIcon,
  },
  {
    id: 3,
    image: PizzaIcon,
  },
];

const DATA_TOPPING = [
  {
    id: 1,
    name: "Shrimp",
    image: <Shirmp/>,
    active: true
  },
  {
    id: 2,
    name: "Bacon",
    image: <Bacon/>
  },
  {
    id: 3,
    name: "MushRoom",
    image: <MushRoom/>
  },
  {
    id: 4,
    name: "Onion",
    image: <Onion/>
  },
  {
    id: 5,
    name: "Sausage",
    image: <Sausage/>
  },
  {
    id: 6,
    name: "Cheese",
    image: <Cheese/>
  },
  {
    id: 7,
    name: "Olives",
    image: <Olives/>
  },
  {
    id: 8,
    name: "Chicken",
    image: <Chicken/>
  },

]
const Item = ({ item, onPress }) => (
  <View
    style={[
      styles.flex,
      {
        marginVertical: 20,
        borderBottomWidth: 1,
        marginHorizontal: 20,
        borderColor: Variable.GRAY,
      },
    ]}
  >
    <View>
      <Image source={item.image} />
    </View>
    <View style={styles.flex}>
      <Entypo name="edit" size={24} color="black" onPress={onPress} />
      <MaterialIcons name="delete" size={24} color="black" />
    </View>
  </View>
);

const OrderScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const renderItem = ({ item }) => {
    return <Item item={item} onPress={() => setModalVisible(true)} />;
  };

  return (
    <View>
      <Header isShowBg={true} title={"PIZZA"} />
      <View style={styles.wrapperList}>
        <View style={styles.headerTitle}>
          <Text
            style={{ textAlign: "center", color: Variable.WHITE, fontSize: 16 }}
          >
            3 Items / Total Cost $30.60
          </Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convert id to string
          // extraData={selectedId}
        />
      </View>
      <View style={[styles.buttonMain, {width: '100%', borderRadius: 20}]}>
            <Text style={styles.textBtn}>CheckOut</Text>
          </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalVisible}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <ScrollView>
            <View>
                <Image source={EditPizza}/>
                <Text style={styles.title}>Size</Text> 
                <BookingSize/>
                <Text style={styles.title}>Quantity</Text> 
          <InputSelector/>
          <Text style={styles.title}>Style of Cake</Text> 
      <View style={[styles.flex, {gap: 10}]}>
          <View style={styles.buttonMain}>
            <Text style={styles.textBtn}>Thick</Text>
          </View>
          <View style={[styles.buttonMain, styles.buttonMainOut]}>
            <Text style={[styles.textBtn, styles.textBtnOut]}>Thin</Text>
          </View>
          </View>
          <Text style={styles.title}>Topping</Text> 
          <ListTopping data={DATA_TOPPING}/>
            </View>
          <Text style={styles.title}>Other description</Text> 
          <TextInput placeholder='I’m want to have extra cheese…' style={styles.input}/>
          </ScrollView>
          <Button
            title={'Checkout'}
            iconName={''}
            styleProps={{
              width: '100%',
              textAlign: 'center',
          }}
          />
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTitle: {
    backgroundColor: Variable.PRIMARY,
    color: Variable.WHITE,
    padding: 20,
    marginHorizontal: 40,
    borderRadius: 10,
  },
  wrapperList: {
    marginTop: 200,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonMain:{
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: Variable.PRIMARY,
    paddingVertical: 10, 
    borderRadius: 5,
    // marginHorizontal: 40
  },
  textBtn:{
    fontSize: 16,
    color: Variable.WHITE,
    fontWeight: 'bold'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalVisible: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    height: 700,
    width: 380,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Variable.PRIMARY,
  },
  title:{
    fontFamily: 'outfit-bold',
    fontSize: 18,
    marginHorizontal: 20,
    marginVertical: 20
  },
  buttonMain:{
    width: 150,
    display: 'flex',
    alignItems : 'center',
    justifyContent: 'center',
    backgroundColor: Variable.PRIMARY,
    padding: 10,
    borderRadius: 10
  },
  textBtn:{
    fontSize: 16,
    color: Variable.WHITE,
    fontWeight: 'bold'
  },
  buttonMainOut:{ 
    backgroundColor: 'transparent',
    borderColor : Variable.GRAY,
    borderWidth: 1
  },
  textBtnOut:{
    color: Variable.GRAY,
  },
  input: {
    height: 100,
    borderWidth: 1,
    padding: 10,
    borderColor: Variable.GRAY,
    borderRadius: 5
  }
});
export default OrderScreen;
