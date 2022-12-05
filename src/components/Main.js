/* eslint-disable prettier/prettier */
import React from 'react';
import {
  faGear,
  faHeart,
  faHome,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import History from '../pages/History';
import Setting from '../pages/Setting';
import { colors } from '../utils/styles/colors';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={
        ({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            const activeColor = focused ? colors.primary[3] : colors.primary[2];
            switch (route.name) {
              case 'Home':
                return (
                  <FontAwesomeIcon icon={faHome} style={{color: activeColor}} />
                );
              case 'Favorites':
                return (
                  <FontAwesomeIcon
                    icon={faHeart}
                    style={{color: activeColor}}
                  />
                );
              case 'History':
                return (
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{color: activeColor}}
                  />
                );
              case 'Setting':
                return (
                  <FontAwesomeIcon icon={faGear} style={{color: activeColor}} />
                );
            }
          },
        })
      }>
      <Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
      />
      <Tab.Screen
        name="History"
        component={History}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default Main;
