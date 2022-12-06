/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import NotLoggedIn from '../components/NotLoggedIn';
import {
  setAddress,
  setFirstName,
  setIsLoggedIn,
  setLastName,
  setPhone,
} from '../features/users/usersSlice';
import {colors} from '../utils/styles/colors';
import useSetting from '../hooks/useSetting';

const Setting = ({navigation}) => {

  const {dispatch, loggedIn, userProfile} = useSetting();

  if (!loggedIn) {
    return <NotLoggedIn navigation={navigation} />;
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>My Account</Text>
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
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            keyboardType="numeric"
            style={styles.input}
            placeholder="Your Address"
            onChangeText={text => dispatch(setPhone(text))}
            value={userProfile.phone}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => dispatch(setIsLoggedIn(false))}
        style={styles.logoutBtn}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          LOGOUT
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
    backgroundColor: colors.primary[4],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 7,
    elevation: 12,
    borderRadius: 10,
  },
  label: {
    color: 'black',
    paddingVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  logoutBtn: {
    backgroundColor: colors.blue[4],
    borderRadius: 10,
    margin: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Setting;
