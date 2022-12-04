/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faStar,
  faChevronLeft,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import {deleteFavorite, saveToFavorite} from '../features/users/usersSlice';
import { colors } from '../utils/styles/colors';

const Detail = ({navigation, route}) => {
  const {details} = useSelector(state => state.hotels);
  const {favorite, loggedIn} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const hotel = route.params;
  const isFavorite = favorite.some(fav => fav.id === hotel.id);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'white',
        paddingBottom: 20,
      }}>
      <ImageBackground
        style={styles.headerImage}
        source={{uri: `${hotel.image}`}}>
        <View style={styles.header}>
          <TouchableHighlight onPress={navigation.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} size={28} color={'white'} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
      <View>
        <View style={styles.iconContainer}>
          <TouchableHighlight
            onPress={() => {
              isFavorite
                ? dispatch(deleteFavorite(hotel.id))
                : dispatch(saveToFavorite(hotel));
            }}>
            <FontAwesomeIcon
              icon={faBookmark}
              size={28}
              color={isFavorite ? colors.primary[3] : 'white'}
            />
          </TouchableHighlight>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{hotel.name}</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 5}}>
                <FontAwesomeIcon icon={faStar} />
                {hotel.reviews.score} ({hotel.reviews.total} reviews)
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Location:</Text>
            <Text style={{lineHeight: 20, color: 'grey', marginBottom: 20}}>
              {details.location}
            </Text>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Description:</Text>
            <Text style={{lineHeight: 20, color: 'grey'}}>{details.desc}</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Price per night
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginLeft: 5,
              }}>
              ${hotel.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              +breakfast
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => loggedIn ? navigation.navigate('Booking', hotel) : navigation.navigate('Login')}>
          <View style={styles.btn}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Book Now
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: colors.primary[3],
    marginHorizontal: 20,
    borderRadius: 10,
  },
  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: colors.blue[3],
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: colors.blue[3],
    top: -30,
    right: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: 400,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    overflow: 'hidden',
  },
  header: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

export default Detail;
