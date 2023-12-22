import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import Variable from "../Utils/Variable";
import Header from "../Components/Header";
import EditPizza from "../../assets/images/editPizza.png";
import InputSelector from "../Components/InputSelector";
import { TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BookingSize from "../Components/BookingSize";

const CreateScreen = () => {

  const navigation = useNavigation();

  return (
    <View>
      <Header isShowBg={true} title={"STEP 1"} />
      <ScrollView>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.wrapperList}>
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
          <Text style={styles.title}>Other description</Text> 
          <TextInput placeholder='I’m want to have extra cheese…' style={[styles.input]}/>

          <TouchableOpacity onPress={()=>navigation.navigate("step")} style={[styles.buttonMain,{backgroundColor: '#0B2031', marginVertical: 20, width: 320, borderRadius: 30}]}>
            <Text style={styles.textBtn}>--</Text>
          </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
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
    display: 'flex',
    // alignItems : 'center',
    justifyContent: 'center',
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // css
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

export default CreateScreen;
