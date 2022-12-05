/* eslint-disable prettier/prettier */
import React from 'react';
import moment from 'moment';
import {StyleSheet, TouchableOpacity} from 'react-native';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';

const CarouselCard = ({navigation, item}) => {
  const city = item.city;
  const inDate = moment();
  const outDate = moment().add(1, 'd');
  const guest = 1;
  return (
    <TouchableOpacity
      style={styles.carouselCard}
      onPress={() =>
        navigation.navigate('List', {city, inDate, outDate, guest})
      }>
      <ImagedCarouselCard
        width={200}
        height={200}
        text={city}
        source={item.image}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  carouselCard: {
    marginRight: 20,
  },
});

export default CarouselCard;
