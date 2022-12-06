/* eslint-disable prettier/prettier */
import useFavorite from '../hooks/useFavorite';

const Favorites = ({navigation}) => {
  const {component} = useFavorite(navigation);
  return component;
};

export default Favorites;
