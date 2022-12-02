/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, ScrollView, Text, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import NotLoggedIn from '../components/NotLoggedIn';
import { setAddress, setFirstName, setIsLoggedIn, setLastName } from '../features/users/usersSlice';

const Setting = ({navigation}) => {
  const dispatch = useDispatch();
  const {loggedIn, userProfile} = useSelector(state => state.users);
  return (
    <ScrollView>
      {loggedIn ? (
        <>
          <Text style={styles.card_title}>My Account</Text>
          <View>
            <Text style={styles.label}>First Name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              onChangeText={text => dispatch(setFirstName(text))}
              value={userProfile.firstName}
            />
            <Text style={styles.label}>Last Name</Text>
            <TextInput
              style={styles.input}
              placeholder="example@gmail.com"
              onChangeText={text => dispatch(setLastName(text))}
              value={userProfile.lastName}
            />
            <Text style={styles.label}>Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Your Address"
              onChangeText={text => dispatch(setAddress(text))}
              value={userProfile.address}
            />
          </View>
          <Button title="Logout" onPress={() => dispatch(setIsLoggedIn(false))} />
        </>
      ) : (
        <NotLoggedIn navigation={navigation} />
      )}
    </ScrollView>
  );
};

const styles = {
  card_title: {
    // fontSize: windowWidth * 0.045,
    // paddingBottom: windowHeight * 0.01,
    fontWeight: 'bold',
  },
  label: {
    color: 'black',
    // fontSize: windowWidth * 0.04,
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
};

export default Setting;
