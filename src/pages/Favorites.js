/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Button, Text, SafeAreaView} from 'react-native';

const Favorites = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>You must Log in to use this feature</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
};

export default Favorites;
