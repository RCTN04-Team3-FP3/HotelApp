/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, SafeAreaView, Text} from 'react-native';

const NotLoggedIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>You must Log in to use this feature</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    height: '100%',
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    marginVertical: 30,
  },
};

export default NotLoggedIn;
