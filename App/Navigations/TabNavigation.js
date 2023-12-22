import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screen/HomeScreen';
import ProfileScreen from '../Screen/ProfileScreen';
import Menu from '../Screen/Menu';
import Colors from '../Utils/Variable';
import { Ionicons } from "@expo/vector-icons";
import PizzaScreen from '../Screen/PizzaScreen';
import ListPizzaScreen from '../Screen/ListPizzaScreen';
import BookingScreen from '../Screen/BookingScreen';
import OrderScreen from '../Screen/OrderScreen';
import CreateScreen from '../Screen/CreateScreen';
import Step2Screen from '../Screen/Step2Screen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="menu"
        component={Menu}
        options={{
          tabBarLabel: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="pizza"
        component={PizzaScreen}
        options={{
          tabBarLabel: "Pizza",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list-pizza"
        component={ListPizzaScreen}
        options={{
          tabBarLabel: "Pizza",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="booking"
        component={BookingScreen}
      />
      <Tab.Screen
        name="order"
        component={OrderScreen}
      />
      <Tab.Screen
        name="create"
        component={CreateScreen}
      />
      <Tab.Screen
        name="step"
        component={Step2Screen}
      />
      
    </Stack.Navigator>
  );
}

export default TabNavigation;