/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearDetail, fetchDetailHotel} from '../features/hotels/hotelsSlice';
import {colors} from '../utils/styles/colors';

const ListCard = ({navigation, hotel}) => {
  const dispatch = useDispatch(hotel.id);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('Detail', hotel);
        dispatch(clearDetail());
        dispatch(fetchDetailHotel(hotel.id));
      }}>
      <SafeAreaView style={styles.card}>
        <View style={styles.priceTag}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>${hotel.price}</Text>
        </View>
        <Image source={{uri: `${hotel.image}`}} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {hotel.name}
              </Text>
            </View>
          </View>
          <Text style={{fontSize: 18, color: 'grey'}}>
            <FontAwesomeIcon icon={faStar} />
            {hotel.reviews.score} ({hotel.reviews.total} reviews)
          </Text>
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 300,
    elevation: 15,
    margin: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  priceTag: {
    height: 60,
    width: 80,
    backgroundColor: colors.blue[3],
    position: 'absolute',
    zIndex: 1,
    right: 0,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: '100%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cardDetails: {
    height: 100,
    borderRadius: 15,
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: '100%',
  },
});

export default ListCard;
