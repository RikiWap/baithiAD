import React from "react";
import { View, StyleSheet, StatusBar, Text, Image, TouchableOpacity } from "react-native";
import MenuIcon from "../../../assets/images/menu.svg";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import BgRectangle from "../../../assets/images/bg-rectangle.svg";
import Variable from "../../Utils/Variable";
import BgFood from "../../../assets/images/bgFood.png";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  isShowBg = false,
  title,
  isShowBgBooking = false,
  styleImage,
  image,
}) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.flex]}>
      <StatusBar backgroundColor={Variable.WHITE} barStyle="light-content" />
      {isShowBg && (
        <BgRectangle
          style={[
            { position: "absolute", top: -100, backgroundColor: "#0B2031" },
          ]}
        />
      )}
      {isShowBgBooking && (
        <View
          style={{
            position: "absolute",
            top: -50,
            height: 250,
            width: "100%",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}
        >
          <Image
            source={BgFood}
            style={{ flex: 1, width: null, height: null }}
          />
        </View>
      )}

      <View style={styles.container}>
        <View style={styles.iconWrap}>
          <Octicons name="three-bars" size={24} color={Variable.WHITE} />
        </View>
        <View>
          <Text
            style={{ color: Variable.WHITE, fontSize: 20, fontWeight: "bold" }}
          >
            {title}
          </Text>
        </View>
          <TouchableOpacity onPress={()=>navigation.navigate("order")}>
        <View style={styles.iconWrap}>
          <SimpleLineIcons name="handbag" size={24} color={Variable.WHITE} />
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    position: "absolute",
    top: 40,
    zIndex: 100,
    width: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  iconWrap: {
    backgroundColor: Variable.PRIMARY,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,
    borderRadius: 99,
  },
  bgHeader: {},
});

export default Header;
