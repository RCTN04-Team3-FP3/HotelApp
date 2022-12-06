/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import Nothing from '../components/Nothing';
import NotLoggedIn from '../components/NotLoggedIn';

const useFavorite = (navigation) => {
  const {loggedIn, favorite} = useSelector(state => state.users);

  let component = null;

  if (!loggedIn) {
    component = <NotLoggedIn navigation={navigation} />;
  } else if (loggedIn && !favorite.length) {
    component = <Nothing />;
  } else {
    component = (
      <ScrollView showsVerticalScrollIndicator={false}>
        {favorite.map((hotel, index) => (
          <ListCard key={index} hotel={hotel} navigation={navigation} />
        ))}
      </ScrollView>
    );
  }
  return {component};
};

export default useFavorite;
