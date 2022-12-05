/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import useFavoriteHistory from "../hooks/useFavoriteHistory";

const History = ({navigation}) => {
  const {component} = useFavoriteHistory(navigation, "his")
  return component;
};

export default History;
