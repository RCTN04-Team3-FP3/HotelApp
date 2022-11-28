/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopHotelCard = ({hotel}) => {
  return (
    <View style={styles.topHotelCard}>
      <View
        style={{
          position: 'absolute',
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: 'row',
        }}>
        <Icon name="star" size={15} color={'orange'} />
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>
          5.0
        </Text>
      </View>
      <Image style={styles.topHotelCardImage} source={hotel.image} />
      <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{hotel.name}</Text>
        <Text style={{fontSize: 12, color: 'grey'}}>
          {hotel.location}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  topHotelCard: {
    height: 200,
    width: 200,
    backgroundColor: 'white',
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHotelCardImage: {
    height: 120,
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
};

export default TopHotelCard;
