/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, SafeAreaView} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import ListCard from '../components/ListCard';
import NotLoggedIn from '../components/NotLoggedIn';

const Favorites = ({navigation}) => {
  const {loggedIn, favorite} = useSelector((state) => state.users);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {
          loggedIn ?
            favorite.length > 0 ?
              favorite.map((hotel, index) => (
                <ListCard key={index} hotel={hotel} navigation={navigation}/>
              ))
              :
              <Text>Favourite Empty!</Text>
            :
            <NotLoggedIn navigation={navigation}/>
        }
      </ScrollView>
  );
};

export default Favorites;
