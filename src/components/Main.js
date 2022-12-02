/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  faGear,
  faHeart,
  faHome,
  faPerson,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favorites from '../pages/Favorites';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Setting from '../pages/Setting';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      screenOptions={
        ({route}) => ({
          tabBarShowLabel: false,
          tabBarIcon: ({focused}) => {
            const activeColor = focused ? 'blue' : 'grey';
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
              case 'Profile':
                return (
                  <FontAwesomeIcon
                    icon={faPerson}
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
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
      />
    </Tab.Navigator>
  );
};

export default Main;
