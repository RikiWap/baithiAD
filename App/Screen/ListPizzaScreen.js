import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    ImageBackground,
    TouchableWithoutFeedback
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
  import Star from "../../assets/images/star.svg";
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
      price: 42,
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
      price: 42,
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
      price: 42,
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
      price: 42,
    },
    {
      id: 5,
      bg: BgMenu5,
      name: "Tropical Storm",
      description:
        "Cheesy mayo sauce and mozzarella, tomatoes, green pepper, onion",
      type: "Pizza",
      time: "15minus",
      price: 42,
      star: 5,
    },
  ];
  
  const Item = ({ item, onPress }) =>{
    const navigation = useNavigation();
    return (
        <TouchableWithoutFeedback
      onPress={() => {
        navigation.navigate("booking")
      }}>
        <View
            style={styles.listContainer}
            >
            <>
            <View style={styles.imageContainer}>
              <Image source={item.bg} style={styles.image} />
            </View>
              <View style={[styles.listStar, {alignItems : 'center', justifyContent: 'center', gap :5}]}>
                    <View style={styles.listStar}>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </View>
                    <Text style={{color : '#E9BC08'}}>4.5</Text>
              </View>
              <View style={[styles.listStar, {alignItems : 'center', justifyContent: 'center', gap :5}]}>
                <Text style={{color : Variable.GRAY, fontSize : 10}}>
                (378 Reviews)
                </Text>
              </View>
             <View style={[styles.flex, {justifyContent : 'space-around'}]}>
             <View>
                <Text style={{margin : 5}}>Size L</Text>
                <Text style={{margin : 5}}>Size M</Text>
              </View>
              <View>
                <Text style={{margin : 5}}>{item.price}$</Text>
                <Text style={{margin : 5}}>{item.price}$</Text>
              </View>
             </View>
            </>
          </View>
            </TouchableWithoutFeedback>
      );
  } 
  
  
  const ListPizzaScreen = () => {
    const { width: screenWidth } = Dimensions.get("window").width;
    
  
    const renderItem = ({ item }) => {
      return <Item item={item} onPress={() => navigation.navigate("pizza")} />;
    };
  
    return (
      <View style={styles.container}>
        <View>
          <Header isShowBg={true} title={'PIZZA'}/>
        </View>
        <View style={styles.wrapperList}>
         
        </View>
        <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convert id to string
          numColumns={2}
          showsVerticalScrollIndicator={false}
        />
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    wrapperList: {
      marginTop: 150,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    // star: {
    //   display: "flex",
    //   alignItems: "center",
    //   gap: 5,
    // },
    flex:{
      display: 'flex',
      flexDirection :'row',
      alignItems :'center',
      gap : 5
    },
    container: {
        flex: 1,
        backgroundColor: 'transparent',
      },
      listContainer: {
        width: Dimensions.get('window').width / 2 - 20,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 5
      },
      imageContainer: {
        margin: 15,
        borderRadius: 10,
        overflow: 'hidden',
      },
      image: {width: '100%', height: undefined, aspectRatio: 1, borderRadius: 99},
    //   nameText: {
    //     color: 'black',
    //     fontWeight: 'bold',
    //     marginLeft: 15,
    //   },
    //   priceText: {
    //     color: 'orange',
    //     fontWeight: 'bold',
    //     marginLeft: 15,
    //     marginTop: 10,
    //   },
    //   button: {
    //     backgroundColor: '#62513E',
    //     padding: 10,
    //     margin: 15,
    //     borderRadius: 10,
    //   },
    //   buttonText: {
    //     color: 'white',
    //     textAlign: 'center',
    //   },
    listStar:{
        display :'flex',
        flexDirection : 'row',
    }
  });
  
  export default ListPizzaScreen;
  