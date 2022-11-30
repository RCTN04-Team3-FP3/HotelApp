/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

const ListCard = ({navigation, hotel}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('Detail', hotel)}>
      <SafeAreaView style={styles.card}>
        <View style={styles.priceTag}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            {hotel.price.options[0].formattedDisplayPrice}
          </Text>
        </View>
        <Image
          source={{uri: `${hotel.propertyImage.image.url}`}}
          style={styles.cardImage}
        />
        <View style={styles.cardDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                {hotel.name}
              </Text>
            </View>
            {/* <Icon name="bookmark-border" size={26} color={'blue'} /> */}
          </View>
          {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={15} color={'orane'} />
            <Icon name="star" size={15} color={'orange'} />
            <Icon name="star" size={15} color={'orange'} />
            <Icon name="star" size={15} color={'orange'} />
            <Icon name="star" size={15} color={'grey'} />
          </View> */}
          <Text style={{fontSize: 18, color: 'grey'}}>
            <FontAwesomeIcon icon={faStar} />
            {hotel.reviews.score} ({hotel.reviews.total} reviews)
          </Text>
          {/* </View> */}
        </View>
      </SafeAreaView>
    </TouchableOpacity>
  );
};

const styles = {
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
    backgroundColor: 'blue',
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
};

export default ListCard;
