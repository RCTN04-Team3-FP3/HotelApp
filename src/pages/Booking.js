/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import Modal from 'react-native-modal';
import {SafeAreaView} from 'react-navigation';
import DatePicker from '../components/DatePicker';
import {addToHistory} from '../features/users/usersSlice';
import useBooking from '../hooks/useBooking';
import {colors} from '../utils/styles/colors';

const Booking = ({navigation, route}) => {
  const {
    dispatch,
    userProfile,
    modalVisible,
    setModalVisible,
    inDate,
    setInDate,
    outDate,
    setOutDate,
  } = useBooking();

  return (
    <SafeAreaView>
      <Modal
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        style={{margin: 10}}>
        <DatePicker
          data={{inDate, outDate, setInDate, setOutDate, setModalVisible}}
        />
      </Modal>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Detail Profile</Text>
          <View>
            <Text style={styles.label}>First Name</Text>
            <Text style={styles.data}>{userProfile.firstName}</Text>
            <Text style={styles.label}>Last Name</Text>
            <Text style={styles.data}>{userProfile.lastName}</Text>
            <Text style={styles.label}>Address</Text>
            <Text style={styles.data}>{userProfile.address}</Text>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.data}>{userProfile.phone}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Transaction</Text>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Text style={styles.label}>Date</Text>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.labelDate}>Change Date</Text>
            </TouchableOpacity>
          </View>
          {(!inDate || !outDate) && (
            <Text style={{fontSize: 18, color: colors.primary[1]}}>
              Choose Date
            </Text>
          )}
          {inDate && outDate && (
            <Text
              style={{
                fontSize: 18,
                color: colors.primary[1],
              }}>{`${inDate.format('ll')} - ${outDate.format('ll')}`}</Text>
          )}
          <Text style={styles.label}>Total Price</Text>
          {!inDate && (
            <Text style={{fontSize: 18, color: colors.primary[1]}}>
              Please choose the date first
            </Text>
          )}
          {inDate && !outDate && (
            <Text style={{fontSize: 18, color: colors.primary[1]}}>
              Please choose the checkout date
            </Text>)}
          {inDate && outDate && (
            <Text
              style={{
                fontSize: 18,
                color: colors.primary[1],
              }}>
              ${outDate.diff(inDate, 'd') * Number(route.params.price)} (
              {outDate.diff(inDate, 'd')} days)
            </Text>
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            if (inDate) {
              const totalPrice =
                outDate.diff(inDate, 'd') * Number(route.params.price);
              dispatch(addToHistory({...route.params, totalPrice}));
              navigation.navigate('History');
            } else {
              Alert.alert('Please choose the date first');
            }
          }}>
          <View style={styles.btn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Confirm
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
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
  labelDate: {
    color: colors.primary[3],
    padding: 10,
  },
  data: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    color: colors.primary[1],
  },
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: colors.primary[3],
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default Booking;
