/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
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

const Detail = ({navigation, route}) => {
  const hotel = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        backgroundColor: 'white',
        paddingBottom: 20,
      }}>
      {/* <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0,0,0,0)"
      /> */}
      <ImageBackground
        style={style.headerImage}
        source={{uri: `${hotel.propertyImage.image.url}`}}>
        <View style={style.header}>
          <TouchableHighlight onPress={navigation.goBack}>
            <FontAwesomeIcon icon={faChevronLeft} size={28} color={'white'} />
          </TouchableHighlight>
        </View>
      </ImageBackground>
      <View>
        <View style={style.iconContainer}>
          <TouchableHighlight>
            <FontAwesomeIcon
              icon={faBookmark}
              size={28}
              color={'white'}
              onPress={navigation.goBack}
            />
          </TouchableHighlight>
        </View>
        <View style={{marginTop: 20, paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{hotel.name}</Text>
          {/* <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: 'grey',
              marginTop: 5,
            }}>
            {item.location}
          </Text> */}
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
            <Text style={{lineHeight: 20, color: 'grey'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dignissim nibh turpis, non vehicula neque condimentum sed. Morbi
              consequat nibh ac faucibus aliquet. Nulla non elit dolor. Nullam
              maximus facilisis risus, eu tristique tortor mollis quis.
              Curabitur eleifend sodales maximus. Morbi ultrices sollicitudin
              justo in mollis. Praesent nec ex a magna accumsan euismod ut
              rutrum diam. Integer laoreet scelerisque nulla a pharetra. Cras
              elementum leo eu sagittis placerat. Mauris hendrerit nisi feugiat
              dui tincidunt, nec tincidunt tellus tincidunt. Praesent vel mollis
              ex.
            </Text>
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
              {hotel.price.options[0].formattedDisplayPrice}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'grey',
                marginLeft: 5,
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
