/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import useFavoriteHistory from "../hooks/useFavoriteHistory";


const Favorites = ({navigation}) => {
  const {component} = useFavoriteHistory(navigation, "fav")
  return component;
};

export default Favorites;
