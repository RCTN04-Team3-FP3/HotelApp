/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, SafeAreaView, Text} from 'react-native';

const NotLoggedIn = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>You must login to use this feature</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
};

const styles = {
  container: {
    padding: 50,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    marginBottom: 30,
  },
};

export default NotLoggedIn;
