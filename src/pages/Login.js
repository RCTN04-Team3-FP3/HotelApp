/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoggedIn} from '../features/users/usersSlice';
import {colors} from '../utils/styles/colors';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.users);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const onPressLogin = () => {
    if (emailInput === email && passwordInput === password) {
      dispatch(setIsLoggedIn(true));
      navigation.goBack();
    } else {
      Alert.alert('Wrong email or password!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>HotelApp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor=""
          onChangeText={text => setEmailInput(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor=""
          onChangeText={text => setPasswordInput(text)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          LOGIN
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue[1],
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: colors.blue[2],
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: colors.primary[1],
  },
  forgot: {
    color: colors.primary[2],
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: colors.blue[4],
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
});

export default Login;
