import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Description = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>
          Our Real Special marinara sauce with fresh tomatoes baked on our
          signature thin crust, baked to a perfect crisp. We create food we’re
          proud to serve and deliver it fast, with a smile.
        </Text>
      </View>
      <View style={styles.view3}>
        <Text>
          Classic marinara sauce, authentic old-world pepperoni, all-natural
          Italian sausage, slow-roasted ham, hardwood smoked bacon, seasoned
          pork and beef. Best an our Hand Tossed crust. With more than 50 years
          of experience under our belts, we understand how to best serve our
          customers through tried and true service principles. Instead of
          following trends, we set them. We create food we’re proud to serve and
          deliver it fast, with a smile.
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view1: {
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "20px",
      marginTop: 60,
      marginHorizontal: 30
    },
    view2: {
      color: "#0B2031",
      letterSpacing: 0.74,
      width: "100%",
      font: "400 12px Lato, sans-serif ",
    },
    view3: {
      color: "#0B2031",
      letterSpacing: 0.74,
      marginTop: 27,
      width: "100%",
      font: "400 12px Lato, sans-serif ",
    },
  });

export default Description