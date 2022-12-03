import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from './src/components/Main';
import Login from './src/pages/Login';
import Detail from './src/pages/Detail';
import {Provider} from 'react-redux';
import {store} from './src/app/store';
import List from './src/pages/List';
import Booking from './src/pages/Booking';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{headerShown: false}}
          />
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
