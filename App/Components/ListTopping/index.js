import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react';
import Variable from '../../Utils/Variable';


const Item = ({ item, onPress }) =>{
    return (
        <View style={[styles.topping, item.active && styles.active]} key={item.id}>
            {item.image}
            <Text style={[styles.textTopping, item.active && {color: Variable.PRIMARY}]}>{item.name}</Text>
        </View>
    )
    }

const ListTopping = ({data}) => {

    const renderItem = ({ item }) => {
        return <Item item={item} onPress={() =>{}} />;
      };

  return (
    <View>
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Convert id to string
          numColumns={3}
          showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    topping:{
        borderWidth: 1,
        borderColor: Variable.GRAY,
        padding: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        gap: 5,
        width: 100,
        margin: 5
    },
    textTopping:{
        fontWeight: 'bold',
    },
    active:{
        borderColor: Variable.PRIMARY,
    }
})

export default ListTopping