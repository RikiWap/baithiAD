import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screen/HomeScreen';
import Step2Screen from '../Screen/Step2Screen';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  return (
    <Drawer.Navigator
    
    useLegacyImplementation={false}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Step2" component={Step2Screen} />
    </Drawer.Navigator>
  );
}