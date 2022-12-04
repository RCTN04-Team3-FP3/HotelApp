/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import Nothing from '../components/Nothing';
import NotLoggedIn from '../components/NotLoggedIn';

const History = ({navigation}) => {
  const {loggedIn, history} = useSelector(state => state.users);

  if (!loggedIn) {
    return <NotLoggedIn navigation={navigation} />;
  }

  if (loggedIn && !history.length) {
    return <Nothing />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {history.map((hotel, index) => (
        <ListCard key={index} hotel={hotel} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default History;
