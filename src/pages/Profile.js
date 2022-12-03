/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {ScrollView, Text} from 'react-native';
import { useSelector } from 'react-redux';
import ListCard from '../components/ListCard';
import NotLoggedIn from '../components/NotLoggedIn';

const Profile = ({ navigation }) => {
  const {loggedIn, history} = useSelector((state) => state.users);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        {
          loggedIn ?
            history.length > 0 ?
              history.map((hotel, index) => (
                <ListCard key={index} hotel={hotel} navigation={navigation}/>
              ))
              :
              <Text>History Empty!</Text>
            :
            <NotLoggedIn navigation={navigation}/>
        }
      </ScrollView>
  );
};

export default Profile;
