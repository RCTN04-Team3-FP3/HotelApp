/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Animated, Image, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({hotel, index, cardWidth, scrollX, activeCardIndex, navigation}) => {
  const inputRange = [
    (index - 1) * cardWidth,
    index * cardWidth,
    (index + 1) * cardWidth,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 0, 0.7],
  });
  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.8, 1, 0.8],
  });
  return (
    <TouchableOpacity
      disabled={activeCardIndex !== index}
      activeOpacity={1}
      // onPress={() => navigation.navigate('DetailsScreen', hotel)}
      >
      <Animated.View style={{...styles.card, width: cardWidth, transform: [{scale}]}}>
        <Animated.View style={{...styles.cardOverLay, width: cardWidth, opacity}} />
        <View style={styles.priceTag}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
            ${hotel.price}
          </Text>
        </View>
        <Image source={hotel.image} style={styles.cardImage} />
        <View style={styles.cardDetails}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>
                {hotel.name}
              </Text>
              <Text style={{color: 'grey', fontSize: 12}}>
                {hotel.location}
              </Text>
            </View>
            <Icon name="bookmark-border" size={26} color={'blue'} />
          </View>
          <View
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
            </View>
            <Text style={{fontSize: 10, color: 'grey'}}>365reviews</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = {
  card: {
    height: 280,
    elevation: 15,
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  cardOverLay: {
    height: 280,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 100,
    borderRadius: 15,
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
    padding: 20,
    width: '100%',
  },
}

export default Card;
