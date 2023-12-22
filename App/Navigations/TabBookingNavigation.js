import Colors from '../Utils/Variable';
import { Ionicons } from "@expo/vector-icons";
import Book from '../Components/TabBooking/Book';
import Description from '../Components/TabBooking/Description';
import Comment from '../Components/TabBooking/Comment';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TabBookingNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle:{backgroundColor: 'transparent', fontFamily: 'outfit-bold'},
      }}
    >
      <Tab.Screen
        name="book"
        component={Book}
        options={{
          tabBarLabel: "Book"
        }}
      />
      <Tab.Screen
        name="description"
        component={Description}
        options={{
          tabBarLabel: "Description",
        }}
      />
      <Tab.Screen
        name="comment"
        component={Comment}
        options={{
          tabBarLabel: "comment",
          
        }}
      />
    </Tab.Navigator>
  );
}

export default TabBookingNavigation;
