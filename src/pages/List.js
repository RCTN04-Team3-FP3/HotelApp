/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, ScrollView, SafeAreaView} from 'react-native';
import ListCard from '../components/ListCard';
import useGetListData from '../hooks/useGetListData';
import {colors} from '../utils/styles/colors';

const List = ({navigation, route}) => {
  const {hotels, loading} = useGetListData(route);

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator
          size="large"
          color={colors.primary[3]}
          style={{padding: 50}}
        />
      </SafeAreaView>
    );
  }
  return (
    <ScrollView>
      {!loading &&
        hotels.map((hotel, index) => (
          <ListCard key={index} hotel={hotel} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

export default List;
