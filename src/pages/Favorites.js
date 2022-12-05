/* eslint-disable prettier/prettier */
import useFavoriteHistory from '../hooks/useFavoriteHistory';

const Favorites = ({navigation}) => {
  const {component} = useFavoriteHistory(navigation, 'fav');
  return component;
};

export default Favorites;
