import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import React from "react";
import ImgPizza from "../../../assets/images/pizza.svg";
import ImgUnPizza from "../../../assets/images/un_pizza.svg";
import Variable from "../../Utils/Variable";

const BookingSize = () => {
  return (
    <View style={[styles.flex, styles.size]}>
        <View style={styles.main}>
      <ImgPizza/>
      <Text style={[styles.titleSize, styles.active]}>Siza L </Text>
      <Text style={[styles.titlePrice, styles.active]}>(8 Slices) $17.23</Text>
    </View>
        <View style={[styles.main, styles.mainNoActive]}>
        <ImgUnPizza/>
      <Text style={styles.titleSize}>Siza M </Text>
      <Text style={styles.titlePrice}>(6 Slices)	$10.34</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  size:{
    width: 300
  },
  title: {
    fontFamily: "outfit-bold",
    fontSize: 24,
    marginHorizontal: 20,
  },
  flex:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  main:{
    padding: 20,
    borderWidth: 1,
    borderColor: Variable.PRIMARY,
    height: '100%',
    borderRadius: 10,
    display: 'flex',
    flexDirection :'column',
    alignItems :'center',
  },
  mainNoActive:{
    borderColor: Variable.GRAY,
    color: Variable.GRAY,
  },
  titleSize:{
    // fontFamily: 'outfit-bold',
    marginTop: 5
},
titlePrice:{
    //   fontFamily: 'outfit-bold',
  },
  active : {
    fontFamily: 'outfit-bold',
  }
});

export default BookingSize;
