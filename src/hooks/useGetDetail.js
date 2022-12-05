/* eslint-disable prettier/prettier */
import {useDispatch, useSelector} from 'react-redux';

const useGetDetail = ({route}) => {
  const {details} = useSelector(state => state.hotels);
  const {favorite, loggedIn} = useSelector(state => state.users);
  const dispatch = useDispatch();
  const hotel = route.params;

  const isFavorite = favorite.some(fav => fav.id === hotel.id);

  return {details, loggedIn, dispatch, isFavorite, hotel};
};

export default useGetDetail;
