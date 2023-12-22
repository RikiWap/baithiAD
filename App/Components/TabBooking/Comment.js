import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image,
  Text,
} from "react-native";
import Avatar from "../../../assets/images/avatar.png";
import Star from "../../../assets/images/star.svg";
import Variable from "../../Utils/Variable";


const DATA = [
    {
      id: 1,
      avatar: Avatar,
      name: "Delicious!",
      description:
        "It’s a very delicious pizza! And I expect to try more in the next time!",
      type: "Susan Wong",
      time: "23 Mar",
      star: 5,
    },
    {
        id: 2,
        avatar: Avatar,
        name: "Excellent!",
        description:
          "It’s a very great pizza, must try it!",
        type: "Marcus",
        time: "10 Jul",
        star: 5,
      },
    {
        id: 3,
        avatar: Avatar,
        name: "Not bad!",
        description:
          "The pizza is good but I have to wait for so long to eat it!",
        type: "Marcus",
        time: "10 Jul",
        star: 5,
      },
  
]

const Item = ({ item, onPress }) => (
    <View onPress={onPress} style={[styles.flex,{margin: 30, gap: 20}]}>
        <View>
            <Image source={item.avatar}/>
        </View>
        <View style={{width: 270}}>
            <View style={[styles.flex,{justifyContent: 'space-between'}]}>
                <View>
                    <Text style={styles.fontWeight}>{item.name}</Text>
                    <View style={styles.flex}>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </View>
                </View>
                <View>
                <Text style={styles.textTime}>{item.time}</Text>
                <Text style={styles.textTime}>{item.type}</Text>
                </View>
            </View>
            <View>
                <Text>{item.description}</Text>
            </View>
        </View>
    </View>
  );

const Comment = () => {

    const renderItem = ({ item }) => {
        return <Item item={item} onPress={() => navigation.navigate("pizza")} />;
      };

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Convert id to string
        // extraData={selectedId}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      position : 'relative',
    },
    flex:{
        display: 'flex',
        flexDirection: 'row'
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    fontWeight: {
        fontWeight: 'bold'
    },
    textTime:{
        color: Variable.GRAY,
        fontFamily: 'outfit-light'
    }
})

export default Comment