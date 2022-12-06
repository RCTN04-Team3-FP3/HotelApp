/* eslint-disable prettier/prettier */
import { useSelector } from "react-redux";
import HistoryCard from "../components/HistoryCard";
import { ScrollView } from "react-native";
import React from 'react';
import Nothing from '../components/Nothing';
import NotLoggedIn from '../components/NotLoggedIn';

const History = ({navigation}) => {
  const {loggedIn, history} = useSelector(state => state.users);

  if (!loggedIn) {
    return <NotLoggedIn navigation={navigation} />;
  }

  if (loggedIn && !history.length) {
    return <Nothing />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {history.map((hotel, index) => (
        <HistoryCard key={index} hotel={hotel} navigation={navigation} />
      ))}
    </ScrollView>
  );
};

export default History;
