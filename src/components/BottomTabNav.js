/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favotires';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';
import Login from '../pages/Login';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Tab.Screen name="Favorites" component={Favorites} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
      <Tab.Screen name="Settings" component={Login} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default BottomTabNav;