/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import ListCard from '../components/ListCard';
import Nothing from '../components/Nothing';
import NotLoggedIn from '../components/NotLoggedIn';

const useFavoriteHistory = (navigation, type) => {
  let list = null;
  const {loggedIn} = useSelector(state => state.users);
  if (type === 'fav') {
    const {favorite} = useSelector(state => state.users);
    list = favorite;
  } else {
    const {history} = useSelector(state => state.users);
    list = history;
  }

  let component = null;

  if (!loggedIn) {
    component = <NotLoggedIn navigation={navigation} />;
  } else if (loggedIn && !list.length) {
    component = <Nothing />;
  } else {
    component = (
      <ScrollView showsVerticalScrollIndicator={false}>
        {list.map((hotel, index) => (
          <ListCard key={index} hotel={hotel} navigation={navigation} />
        ))}
      </ScrollView>
    );
  }
  return {component};
};

export default useFavoriteHistory;
