import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons"; // Import AntDesign from expo/vector-icons
import Variable from '../../Utils/Variable';

export default function Button({ title, color = 'default', onPress, iconName, styleProps }) {
    
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: getColor(color) }, {...styleProps}]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
      {iconName && iconName()} 
    </TouchableOpacity>
  );
}

const getColor = (color) => {
  if (color === 'default') {
    return Variable.PRIMARY;
  } else {
    return color;
  }
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    borderRadius: 99,
    alignSelf:'flex-start'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
});