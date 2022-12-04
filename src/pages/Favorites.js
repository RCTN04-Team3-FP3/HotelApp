/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import Nothing from '../components/Nothing';
import NotLoggedIn from '../components/NotLoggedIn';

const Favorites = ({navigation}) => {
  const {loggedIn, favorite} = useSelector(state => state.users);

  if (!loggedIn) {
    return <NotLoggedIn navigation={navigation} />;
  }

  if (loggedIn && !favorite.length) {
    return <Nothing />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {favorite.map((hotel, index) => (
        <ListCard key={index} hotel={hotel} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default Favorites;
