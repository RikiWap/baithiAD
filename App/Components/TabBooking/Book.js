import React from 'react'
import { View, Text ,StyleSheet, ScrollView, TextInput, KeyboardAvoidingView } from 'react-native'
import BookingSize from '../BookingSize'
import { useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import Variable from '../../Utils/Variable';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

const Book = () => {
  const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>Size</Text> 
      <BookingSize/>
      <Text style={styles.title}>Quantity</Text> 
      <View>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}

          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? 'blue' : 'black'}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
      </View>
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
      <View style={[styles.buttonMain, {width: '100%'}]}>
            <Text style={[styles.textBtn]}>Add topping</Text>
          </View>
          <Text style={styles.title}>Other Description</Text> 
          <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
          <TextInput placeholder='I’m want to have extra cheese…' style={styles.input}/>
          </KeyboardAvoidingView>
          </View>
          <View style={{marginTop: 20}}>
          <View style={[styles.buttonMain, {width: '100%', borderRadius: 20}]}>
            <Text style={styles.textBtn}>Thick</Text>
          </View>
          <View style={[styles.buttonMain, styles.buttonMainOut, {width: '100%', borderRadius: 20, marginVertical: 10}]}>
            <Text style={[styles.textBtn, styles.textBtnOut]}>Thin</Text>
          </View>
          </View>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
    },
    title:{
      fontFamily: 'outfit-bold',
      fontSize: 18,
      marginHorizontal: 20,
      marginVertical: 20
    },
    dropdown: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'transparent',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    flex:{
      display: 'flex',
      flexDirection: 'row',
    },
    buttonMain:{
      width: '50%',
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
})

export default Book