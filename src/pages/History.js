/* eslint-disable prettier/prettier */
import useFavoriteHistory from '../hooks/useFavoriteHistory';

const History = ({navigation}) => {
  const {component} = useFavoriteHistory(navigation, 'his');
  return component;
};

export default History;
