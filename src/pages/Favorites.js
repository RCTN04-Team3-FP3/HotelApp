/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, SafeAreaView} from 'react-native';
import NotLoggedIn from '../components/NotLoggedIn';

const Favorites = ({navigation}) => {
  return (
    <NotLoggedIn navigation={navigation}/>
  );
};

export default Favorites;
