/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {TouchableOpacity} from 'react-native';
import ImagedCarouselCard from 'react-native-imaged-carousel-card';

const CarouselCard = ({navigation, city}) => {
  return (
    <TouchableOpacity
      style={styles.carouselCard}
      onPress={() => navigation.navigate('List', city.city)}>
      <ImagedCarouselCard
        width={200}
        height={200}
        text={city.city}
        source={city.image}
      />
    </TouchableOpacity>
  );
};

const styles = {
  carouselCard: {
    marginRight: 20,
  },
};

export default CarouselCard;
