/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
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

const Detail = ({navigation, route}) => {
  const {details} = useSelector(state => state.hotels);
  const {favorite} = useSelector(state => state.users);
  const hotel = route.params;
  const dispatch = useDispatch();
  const isFavorite = favorite.some(fav => fav.id === hotel.id);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'white',
        paddingBottom: 20,
      }}>
      <ImageBackground
        style={style.headerImage}
        source={{uri: `${hotel.image}`}}>
        <View style={style.header}>
          <TouchableHighlight onPress={navigation.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} size={28} color={'white'} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <TouchableHighlight
            onPress={() => {
              isFavorite
                ? dispatch(deleteFavorite(hotel.id))
                : dispatch(saveToFavorite(hotel));
            }}>
            <FontAwesomeIcon
              icon={faBookmark}
              size={28}
              color={isFavorite ? 'red' : 'white'}
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
          <View style={style.priceTag}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 5,
              }}>
              ${hotel.price}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 10,
              }}>
              +breakfast
            </Text>
          </View>
        </View>
        <View style={style.btn}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Book Now
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btn: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: 'blue',
    marginHorizontal: 20,
    borderRadius: 10,
  },

  priceTag: {
    height: 40,
    alignItems: 'center',
    marginLeft: 40,
    paddingLeft: 20,
    flex: 1,
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  iconContainer: {
    position: 'absolute',
    height: 60,
    width: 60,
    backgroundColor: 'blue',
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
