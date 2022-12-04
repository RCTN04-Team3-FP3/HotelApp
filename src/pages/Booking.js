/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToHistory} from '../features/users/usersSlice';

const Booking = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {userProfile} = useSelector(state => state.users);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.card_title}>Detail Profile</Text>
        <View>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={userProfile.firstName}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={userProfile.lastName}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Address"
            value={userProfile.address}
          />
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Phone Number"
            value={userProfile.phone}
          />
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.card_title}>Detail Price</Text>
        <View>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            value={userProfile.firstName}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            value={userProfile.lastName}
          />
          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Address"
            value={userProfile.address}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(addToHistory(route.params));
          navigation.navigate('History');
        }}>
        <View style={styles.btn}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Confirm
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
    backgroundColor: 'lightgrey',
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  card_title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 10,
  },
});

export default Booking;
