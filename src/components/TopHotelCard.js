/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TopHotelCard = ({city, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.topHotelCard}
      onPress={() => navigation.navigate('List', city.city)}>
      <View>
        <View
          style={{
            position: 'absolute',
            top: 5,
            right: 5,
            zIndex: 1,
            flexDirection: 'row',
          }}>
          <Icon name="star" size={15} color={'orange'} />
        </View>
        <Image style={styles.topHotelCardImage} source={city.image} />
        <View style={{paddingVertical: 5, paddingHorizontal: 10}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{city.city}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  topHotelCard: {
    height: 170,
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
