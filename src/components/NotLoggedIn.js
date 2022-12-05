/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../utils/styles/colors';

const NotLoggedIn = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>You must login to use this feature</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.loginBtn}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
  },
  loginBtn: {
    backgroundColor: colors.blue[4],
    borderRadius: 25,
    marginTop: 20,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default NotLoggedIn;
